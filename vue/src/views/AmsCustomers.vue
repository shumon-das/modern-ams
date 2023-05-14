<template>
<!--<div class="grid">-->
  <DynamicTable :tableData="customers()" />
<!--</div>-->
</template>

<script lang="ts">
import {defineComponent} from "vue";
import DynamicTable from "@/components/micro/DynamicTable.vue";
import { customers } from "@/stores/static-data";

export default defineComponent({
  name: "AmsCustomers",
  methods: {
    customers() {
      return customers
    }
  },
  components: { DynamicTable },

})
</script>

<style scoped></style>