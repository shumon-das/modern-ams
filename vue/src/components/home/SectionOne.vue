<template>
  <div class="grid section-one">
    <div class="col-2"></div>
    <div class="col-4">
      <div class="service-message">
        <h3 class="section-one-message text-7xl">Unified asset management service for your company</h3>
        <h2 class="section-one-message">Design, automate, deliver, and manage critical IT and business services</h2>
        <AmsButton class=" block m-auto" label="TRY FOR A FREE DEMO" severity="help" raised  />
      </div>
    </div>
    <div class="col-4">
      <img src="@/assets/images/section-one-pc-user.jpg" alt="">
    </div>
    <div class="col-2"></div>
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
  opacity: 0.5;
}
.section-one-message {
  font-family: sans-serif;
}
</style>