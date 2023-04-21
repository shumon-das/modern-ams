<template>
  <div class="grid section-one">
      <div class="sec-one-img">
        <img src="@/assets/images/section-one-handshake.jpg" alt="background" class="back-img">
      </div>

    <div class="col-1"></div>
    <div class="col-5 sec-one-one mt-6">
      <div class="service-message">
        <h3 class="section-one-message text-7xl">Unified asset management service <br> for your company</h3>
        <h2 class="section-one-message">Design, automate, deliver, and manage critical IT and business services</h2>
        <AmsButton class=" block m-auto" label="TRY FOR A FREE DEMO" severity="help" raised  />
      </div>
    </div>
    <div class="col-5 sec-one-one mt-6">
      <img class="sec-one-img2" src="@/assets/images/group-work.png" alt="">
    </div>
    <div class="col-1"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SectionOne",
})
</script>

<style>

.sec-one-img {
  width: 100%;
  height: 92vh;
  position: absolute;
  opacity: 0.4;
}
.back-img {
  width: 100%;
  height: 86vh;
}
.section-one {
  height: 86vh;
}
.sec-one-one {
  position: relative;
}
.section-one-message {
  font-family: sans-serif;
}
.sec-one-img2 {
  width: 100%;
  opacity: 0.8;
}
</style>