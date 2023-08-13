<template>
  <AmsHeader />
  <div class="grid">
    <div class="col-1"></div>
    <div class="col-10">
      <div class="card">
        <DataTable :value="products" tableStyle="min-width: 50rem">
          <Column
              v-for="col of columns"
              :key="col.field"
              :field="col.field"
              :header="col.header"
          ></Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import { testTableData } from "@/data/Products";
import { testTable } from "@/tables/columns";

export default defineComponent({
  name: "TestTable",
  data() {
    return {
      products: null as any,
      columns: testTable,
      tableData: testTableData,
    };
  },
  mounted() {
    this.products = this.tableData;
  }
})
</script>
