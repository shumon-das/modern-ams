<template>
  <h3 class="text-center">PrimeVue DataTable</h3>
  <div class="grid">
    <div class="col-2"></div>
    <div class="col-8">
      <div class="card">
        <DataTable
            :value="products"
            showGridlines
            paginator
            :rows="5"
            removableSort
            tableStyle="min-width: 50rem"
        >
          <template #paginatorstart>
            <AmsButton type="button" icon="pi pi-refresh" text />
          </template>
          <template #paginatorend>
            <AmsButton type="button" icon="pi pi-download" text />
          </template>
          <Column field="code" sortable header="Code"></Column>
          <Column field="name" sortable header="Name"></Column>
          <Column field="category" sortable header="Category"></Column>
          <Column field="quantity" sortable header="Quantity"></Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { ProductTableInterface } from "@/tables/interfaces";
import {defineComponent} from "vue";


export default defineComponent({
  name: "AmsTable",
  data() {
    return {
      products: null as ProductTableInterface[] | null,
    };
  },
  mounted() {
    this.products = [
      {code: "a", name: "mono", category: "developer", quantity: 1},
      {code: "b", name: "mono", category: "developer", quantity: 2},
      {code: "c", name: "mono", category: "developer", quantity: 3},
      {code: "d", name: "mono", category: "developer", quantity: 4},
      {code: "e", name: "mono", category: "developer", quantity: 5},
      {code: "f", name: "mono", category: "developer", quantity: 6},
      {code: "g", name: "mono", category: "developer", quantity: 7},
      {code: "h", name: "mono", category: "developer", quantity: 8},
      {code: "i", name: "mono", category: "developer", quantity: 9},
      {code: "j", name: "mono", category: "developer", quantity: 10},
      {code: "k", name: "mono", category: "developer", quantity: 11},
      {code: "l", name: "mono", category: "developer", quantity: 12},
      {code: "m", name: "mono", category: "developer", quantity: 13},
      {code: "n", name: "mono", category: "developer", quantity: 14},
      {code: "o", name: "mono", category: "developer", quantity: 15},
      {code: "p", name: "mono", category: "developer", quantity: 16},
      {code: "q", name: "mono", category: "developer", quantity: 17},
      {code: "r", name: "mono", category: "developer", quantity: 18},
      {code: "s", name: "mono", category: "developer", quantity: 19},
      {code: "t", name: "mono", category: "developer", quantity: 20},
      {code: "u", name: "mono", category: "developer", quantity: 21},
      {code: "v", name: "mono", category: "developer", quantity: 22},
      {code: "w", name: "mono", category: "developer", quantity: 23},
      {code: "v", name: "mono", category: "developer", quantity: 24},
      {code: "y", name: "mono", category: "developer", quantity: 25},
      {code: "z", name: "mono", category: "developer", quantity: 26},
    ];
  }
})
</script>

<style scoped>

</style>