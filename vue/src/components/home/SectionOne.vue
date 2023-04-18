<template>
  <div class="grid section-one">
      <div class="img">
        <img src="@/assets/images/section-one-handshake.jpg" alt="" class="back-img">
      </div>

    <div class="col-2"></div>
    <div class="col-4 sec-one-one">
      <div class="service-message">
        <h3 class="section-one-message text-7xl">Unified asset management service for your company</h3>
        <h2 class="section-one-message">Design, automate, deliver, and manage critical IT and business services</h2>
        <AmsButton class=" block m-auto" label="TRY FOR A FREE DEMO" severity="help" raised  />
      </div>
    </div>
    <div class="col-4 sec-one-one">
<!--      <img src="@/assets/images/section-one-pc-user.jpg" alt="">-->
    </div>
    <div class="col-2"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SectionOne",
})
</script>

<style>

.img {
  width: 100%;
  height: 92vh;
  position: absolute;
  opacity: 0.4;
}
.back-img {
  width: 100%;
  height: 92vh;
}
.sec-one-one {
  position: relative;
}
.section-one-message {
  font-family: sans-serif;
}
</style>