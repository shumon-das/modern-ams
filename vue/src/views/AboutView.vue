<template>
  <div class="about">
    <h1>This is an about page {{data.name}}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutView",
  data() {
    return {
      data: [] as any,
    }
  },
  mounted() {
    const response = fetch("https://127.0.0.1:8000/home");
    response
        .then((data) => data.json())
        .then((data) => this.data = data)
  }
})
</script>

<style></style>
