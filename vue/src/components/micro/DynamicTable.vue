<template>
  <h3 class="text-center">PrimeVue DataTable</h3>
  <div class="grid">
    <div class="col-2"></div>
    <div class="col-8">
      <div class="card">
        <DataTable
            v-model:filters="filters"
            :value="customers"
            showGridlines
            resizableColumns
            paginator
            :rows="5"
            dataKey="id"
            filterDisplay="row"
            :loading="loading"
            :globalFilterFields="['name', 'country.name', 'representative.name', 'status']"
        >
          <template #header>
            <div class="flex justify-content-end">
                    <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                    </span>
            </div>
          </template>

          <template #empty> No customers found. </template>
          <template #loading> Loading customers data. Please wait. </template>

          <Column
              v-for="col in this.config.columns"
              :field="col.field"
              :header="col.header"
              style="min-width: 12rem"
              sortable
          >
            <template #body="{ data }">
              {{ data.name }}
            </template>
            <template #filter="{ filterModel, filterCallback }">
              <InputText
                  v-model="filterModel.value"
                  type="text"
                  @input="filterCallback()"
                  class="p-column-filter"
                  placeholder="Search by name"
              />
            </template>
          </Column>

<!--          <Column-->
<!--              header="Country"-->
<!--              filterField="country.name"-->
<!--              style="min-width: 12rem"-->
<!--          >-->
<!--            <template #body="{ data }">-->
<!--              <div class="flex align-items-center gap-2">-->
<!--                <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${data.country.code}`" style="width: 24px" />-->
<!--                <span>{{ data.country.name }}</span>-->
<!--              </div>-->
<!--            </template>-->
<!--            <template #filter="{ filterModel, filterCallback }">-->
<!--              <InputText-->
<!--                  v-model="filterModel.value"-->
<!--                  type="text" @input="filterCallback()"-->
<!--                  class="p-column-filter"-->
<!--                  placeholder="Search by country" />-->
<!--            </template>-->
<!--          </Column>-->

<!--          <Column-->
<!--              header="Agent"-->
<!--              filterField="representative"-->
<!--              :showFilterMenu="true"-->
<!--              :filterMenuStyle="{ width: '14rem' }" style="min-width: 14rem"-->
<!--          >-->
<!--            <template #body="{ data }">-->
<!--              <div class="flex align-items-center gap-2">-->
<!--                <img :alt="data.representative.name" src="@/assets/images/group-work.png" style="width: 32px" />-->
<!--                <span>{{ data.representative.name }}</span>-->
<!--              </div>-->
<!--            </template>-->
<!--            <template #filter="{ filterModel, filterCallback }">-->
<!--              <MultiSelect-->
<!--                  v-model="filterModel.value"-->
<!--                  @change="filterCallback()"-->
<!--                  :options="representatives"-->
<!--                  optionLabel="name"-->
<!--                  placeholder="Any"-->
<!--                  class="p-column-filter"-->
<!--                  style="min-width: 14rem"-->
<!--                  :maxSelectedLabels="1"-->
<!--              >-->
<!--                <template #option="slotProps">-->
<!--                  <div class="flex align-items-center gap-2">-->
<!--                    <img :alt="slotProps.option.name" src="@/assets/images/group-work.png" style="width: 32px" />-->
<!--                    <span>{{ slotProps.option.name }}</span>-->
<!--                  </div>-->
<!--                </template>-->
<!--              </MultiSelect>-->
<!--            </template>-->
<!--          </Column>-->

<!--          <Column-->
<!--              field="status"-->
<!--              header="Status"-->
<!--              :showFilterMenu="true"-->
<!--              :filterMenuStyle="{ width: '14rem' }"-->
<!--              style="min-width: 12rem"-->
<!--          >-->
<!--            <template #body="{ data }">-->
<!--              <Tag :value="data.status" :severity="getSeverity(data.status)" />-->
<!--            </template>-->
<!--            <template #filter="{ filterModel, filterCallback }">-->
<!--              <PDropdown-->
<!--                  v-model="filterModel.value"-->
<!--                  @change="filterCallback()"-->
<!--                  :options="statuses"-->
<!--                  placeholder="Select One"-->
<!--                  class="p-column-filter"-->
<!--                  style="min-width: 12rem"-->
<!--                  :showClear="true"-->
<!--              >-->
<!--                <template #option="slotProps">-->
<!--                  <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />-->
<!--                </template>-->
<!--              </PDropdown>-->
<!--            </template>-->
<!--          </Column>-->
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { ProductTableInterface, CustomerTableInterface } from "@/tables/interfaces";
import {defineComponent} from "vue";
import { customers, products, representatives } from "@/stores/static-data";
import { filters } from "@/tables/columnsFilters";
import { tables } from "@/tables/tables";
import {columns} from "@/tables/columnStructures";

export default defineComponent({
  name: "DynamicTable",
  computed: {
    columns() {
      return columns
    }
  },
  props: {
    tableData: { type: Array },
  },
  data() {
    let table = tables['dynamicTable1']();
    return {
      config: table,
      customers: null as CustomerTableInterface[] | null,
      filters: filters,
      representatives: representatives,
      statuses: ['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'],
      loading: false,
      products: null as ProductTableInterface[] | null,
    };
  },
  mounted() {
    // this.products = products;
    // this.customers = customers;
    this.getData();
  },
  methods: {
    getSeverity(status: string) {
      switch (status) {
        case 'unqualified':
          return 'danger';

        case 'qualified':
          return 'success';

        case 'new':
          return 'info';

        case 'negotiation':
          return 'warning';

        case 'renewal':
          return null;
      }
    },

    getData: function (): void {
      if (this.tableData) {
        this.customers = this.tableData;
      }
    },
  },
})
</script>

<style scoped>

</style>