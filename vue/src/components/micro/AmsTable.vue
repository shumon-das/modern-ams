<template>
  <div class="grid">
    <div class="col-10">
      <div class="card">
        <DataTable
            v-model:filters="filters"
            :value="data"
            tableStyle="min-width: 50rem"
            :showGridlines="true"
            :paginator="true"
            :rows="5"
            :rowsPerPageOptions="[5, 10, 20, 50]"
            :sortField="sortField"
            :sortOrder="-1"
        >
          <template #header>
            <div class="flex justify-content-end">
            <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
            </span>
            </div>
          </template>
          <Column
              v-for="col of columns"
              :key="col.field"
              :sortable="true"
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
import {FilterMatchMode} from "primevue/api";

export default defineComponent({
  name: "AmsTable",
  props: {
    columns: { type: Array, required: true },
    data: { type: Array, required: true },
    sortField: { type: String },
  },
  data() {
    return {
      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        status: { value: null, matchMode: FilterMatchMode.EQUALS },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS }
      },
    };
  },
  mounted() {

  },
  methods: {

  },
})
</script>
