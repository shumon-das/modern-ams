<template>
  <div class="grid section-two">
    <div class="sec-two-img">
      <img src="@/assets/images/section-two-background.jpg" alt="background" class="sec-two-back-img">
    </div>
    <div class="col-6"></div>
    <div class="col-6">
<!--      <div class="quote">-->
<!--        <span class="quote1">,,</span>-->
<!--        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae, delectus eligendi facere fuga laborum magnam magni nihil, nulla porro quis ullam unde voluptatem! Quisquam repudiandae suscipit voluptatum. Fugit, odio!-->
<!--        <span class="quote2">,,</span>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SectionTwo",
})
</script>

<style scoped>
.sec-two-img {
  width: 100%;
  height: 70vh;
}
.sec-two-back-img {
  width: 100%;
  height: 100%;
}
.quote1, .quote2 {
  display: inherit;
  font-size: 100px;
  font-weight: 700;
}
.quote1 {
  transform: rotate(180deg);
  float: left;
}
</style>