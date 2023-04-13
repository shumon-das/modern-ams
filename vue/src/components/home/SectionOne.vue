<template>
  <div class="grid section-one">
      <h3>Hello World!</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SectionOne"
})
</script>

<style>
.section-one {
  background-image: url("@/assets/images/section-one-handshake.jpg");
  background-size: cover;
  height: 100vh;
  background-repeat: no-repeat;
}
</style>