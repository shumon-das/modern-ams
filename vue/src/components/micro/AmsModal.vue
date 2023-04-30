<template>
  <div class="card flex justify-content-center">
<!--    <AmsButton label="Show" icon="pi pi-external-link" @click="showModal" />-->
    <PModal v-model:visible="this.visible" header="Sign In" p-dialog-titlebar-close="true"	:style="{ width: '25vw' }">
        <span class="p-float-label my-5">
            <InputText class="w-full" id="username" v-model="this.email" />
            <label for="username">Username</label>
        </span>
      <span class="p-float-label my-5">
          <PPassword class="w-full" v-model="this.password" inputClass="w-full" toggleMask/>
          <label for="password">Password</label>
      </span>
      <template #footer>
        <AmsButton label="No" icon="pi pi-times" @click="response(false)"/>
        <AmsButton label="Yes" icon="pi pi-check" @click="response(false)" autofocus />
      </template>
    </PModal>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "AmsModal",
  emits: ["modalResponse"],
  props: {
    display: {required: true, type: Boolean}
  },
  data() {
    return {
      visible: this.display,
      email: "",
      password: "",
    };
  },
  methods: {
    response(value: boolean) {
      this.visible = false;
      this.$emit("modalResponse", value);
    }
  },
  watch: {
    display(newValue) {
      this.visible = newValue
    }
  }
})
</script>

<style scoped>
#password {
  display: block;
  width: 100%!important;
}
</style>