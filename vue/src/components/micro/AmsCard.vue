<template>
  <PrimeCard>
      <template #header>
        <i :class="this.icon"></i>
      </template>
      <template #title> {{ config.title }} </template>
      <template #content>
          <p> {{config.content}} </p>
      </template>
  </PrimeCard>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "AmsCard",
  props: {
    config: {
      type: Object,
      required: true,
      icon: { type: String, required: true },
      title: { type: String, required: true },
      content: { type: String, required: true },
    }
  },
  data() {
    return {
      icon: "pi " + this.config.icon + " icon-style",
    }
  }
})
</script>

<style>
.p-card-content {
  padding-top: 0!important;
}
.icon-style {
  color: red;
  margin-left: 30px;
  font-size: 40px!important;
}
.p-card {
  padding-top: 25px;
  background-color: ghostwhite;
  border: 1px solid gainsboro;
}
</style>