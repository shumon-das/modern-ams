<template>
<div class="grid flex justify-content-center mt-7">
  <AmsCustomSwitch
      :value="val"
      :leftOption="'and'"
      :rightOption="'or'"
      @update="getUpdate($event)"
  />
</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import AmsCustomSwitch from "@/components/micro/custom/AmsCustomSwitch.vue";

export default defineComponent({
  name: "AmsCustomers",
  components: { AmsCustomSwitch },
  data() {
    return {
      val: false,
    };
  },
  beforeMount() {
    this.updateVal();
  },
  methods: {
    updateVal() {
      this.val = true;
    },
    getUpdate(evt: boolean) {
      console.log(evt);
    }
  },
})
</script>

<style scoped>

</style>