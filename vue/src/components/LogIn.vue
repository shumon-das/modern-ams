<template>
  <div class="card flex justify-content-center">
    <PModal v-model:visible="this.visible" header="Sign In" p-dialog-titlebar-close="true"	:style="{ width: '25vw' }">
        <span class="p-float-label my-5">
            <InputText class="w-full" id="username" v-model="this.email" />
            <label for="username">Username</label>
        </span>
      <span class="p-float-label my-5">
          <PPassword
              class="w-full"
              :class="{ 'p-invalid': v$.password.$error }"
              v-model="this.password"
              inputClass="w-full"
              toggleMask
          />
          <label for="password">Password</label>
      </span>
<!--      <span v-if="v$.password.$error">{{ v$.password.$errors[0].$message }}</span>-->
      <ValidationMessage :errors="v$.password.$errors" />
      <template #footer>
        <AmsButton label="Close" icon="pi pi-times" text raised @click="response(false)"/>
        <AmsButton label="SignIn" icon="pi pi-check" @click="login()" autofocus />
      </template>
    </PModal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useVuelidate from "@vuelidate/core"
import {email, minLength, required} from "@vuelidate/validators";

export default defineComponent({
  name: "LogIn",
  emits: ["modalResponse"],
  props: {
    display: {required: true, type: Boolean}
  },
  data() {
    return {
      v$: useVuelidate(),
      visible: this.display,
      email: "",
      password: "",
    };
  },
  validations() {
    return {
      email: { required },
      password: { required, email, minLength: minLength(6) }
    }
  },
  methods: {
    response(value: boolean) {
      this.visible = false;
      this.$emit("modalResponse", value);
    },
    login(){
      this.v$.$validate()
      if(!this.v$.$error) {
        this.response(false);
      }
    }
  },
  watch: {
    display(newValue) {
      this.visible = newValue
    }
  }
})
</script>

<style></style>