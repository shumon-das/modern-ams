<template>
<h2>Login</h2>
  <AmsButton
      label="Show"
      icon="pi pi-external-link"
      @click="this.display = true"
  />

  <AmsModal
      :display="this.display"
      @modal-response="getModalResponse($event)"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LogIn",
  data() {
    return {
      display: false,
    }
  },
  methods: {
    getModalResponse(evt: boolean) {
      this.display = evt;
    }
  }
})
</script>

<style></style>