<template>
<div class="grid flex justify-content-center mt-7">
  <AmsCustomSwitch :value="true" :optionA="'and'" :optionB="'or'" @update="getUpdate($event)"/>
</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import AmsCustomSwitch from "@/components/micro/custom/AmsCustomSwitch.vue";

export default defineComponent({
  name: "AmsCustomers",
  components: { AmsCustomSwitch },
  methods: {
    getUpdate(evt: boolean) {
      console.log(evt);
    }
  },
})
</script>

<style scoped>

</style>