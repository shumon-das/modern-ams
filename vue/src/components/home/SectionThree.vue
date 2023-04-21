<template>
  <div class="grid">
    <div class="col-4">
      <AmsCard
          :config="{
            icon: 'pi-send',
            title: 'Standardization',
            content: 'some content'
          }"
      />
    </div>
    <div class="col-4"></div>
    <div class="col-4"></div>
  </div>

  <div class="grid">
    <div class="col-4"></div>
    <div class="col-4"></div>
    <div class="col-4"></div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  name: "SectionThree",
})
</script>

<style></style>