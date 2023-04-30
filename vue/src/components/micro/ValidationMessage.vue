<template>
<div
    class="input-errors text-red-500"
    v-for="error of errors"
    :key="error.$uid"
>
  <label class="p-error"> {{ error.$message }} </label>
</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "ValidationMessage",
  props: {
    errors: { require: true, type: Object }
  },
  data() {
    console.log(this.errors)
  }
})
</script>

<style scoped>

</style>