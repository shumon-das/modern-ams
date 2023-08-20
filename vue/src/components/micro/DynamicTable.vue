<template>
  <h3 class="text-center">PrimeVue DataTable</h3>
  <div class="grid">
    <div class="col-2"></div>
    <div class="col-8">
      <div class="card">
        <DataTable
            v-model:filters="filters"
            :value="customers"
            paginator
            :rows="10"
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
              header="Name"
              field="name"
              style="min-width: 12rem"
          >
            <template #body="{ data }">
              {{ data.name }}
            </template>

            <template #filter="{ filterModel, filterCallback }">
              <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Search by name" />
            </template>
          </Column>

          <Column
              header="Country"
              field="country.name"
              style="min-width: 12rem"
          >
            <template #body="{ data }">
              <div class="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${data.country.code}`" style="width: 24px" />
                <span>{{ data.country.name }}</span>
              </div>
            </template>
            <template #filter="{ filterModel, filterCallback }">
              <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Search by country" />
            </template>
          </Column>

          <Column
              header="Agent"
              filterField="representative"
              :showFilterMenu="false"
              :filterMenuStyle="{ width: '14rem' }"
              style="min-width: 14rem"
          >
            <template #body="{ data }">
              <div class="flex align-items-center gap-2">
<!--                <img :alt="data.representative.name" :src="`https://primefaces.org/cdn/primevue/images/avatar/${data.representative.image}`" style="width: 32px" />-->
                <span>{{ data.representative.name }}</span>
              </div>
            </template>

            <template #filter="{ filterModel, filterCallback }">
              <MultiSelect v-model="filterModel.value" @change="filterCallback()" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter" style="min-width: 14rem" :maxSelectedLabels="1">
                <template #option="slotProps">
                  <div class="flex align-items-center gap-2">
                    <img :alt="slotProps.option.name" :src="`https://primefaces.org/cdn/primevue/images/avatar/${slotProps.option.image}`" style="width: 32px" />
                    <span>{{ slotProps.option.name }}</span>
                  </div>
                </template>
              </MultiSelect>
            </template>
          </Column>

<!--          <Column field="status" header="Status" :showFilterMenu="false" :filterMenuStyle="{ width: '14rem' }" style="min-width: 12rem">-->
<!--            <template #body="{ data }">-->
<!--              <Tag :value="data.status" :severity="getSeverity(data.status)" />-->
<!--            </template>-->
<!--            <template #filter="{ filterModel, filterCallback }">-->
<!--              <Dropdown v-model="filterModel.value" @change="filterCallback()" :options="statuses" placeholder="Select One" class="p-column-filter" style="min-width: 12rem" :showClear="true">-->
<!--                <template #option="slotProps">-->
<!--                  <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />-->
<!--                </template>-->
<!--              </Dropdown>-->
<!--            </template>-->
<!--          </Column>-->
<!--          <Column field="verified" header="Verified" dataType="boolean" style="min-width: 6rem">-->
<!--            <template #body="{ data }">-->
<!--              <i class="pi" :class="{ 'pi-check-circle text-green-500': data.verified, 'pi-times-circle text-red-400': !data.verified }"></i>-->
<!--            </template>-->
<!--            <template #filter="{ filterModel, filterCallback }">-->
<!--              <TriStateCheckbox v-model="filterModel.value" @change="filterCallback()" />-->
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
import { representatives } from "@/stores/static-data";
import { filters } from "@/tables/columnsFilters";
import { tables } from "@/tables/tables";
import {columns} from "@/tables/columnStructures";
import { customers } from "@/data/Products";

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
      // customers: [] as CustomerTableInterface[] | null,
      customers: customers,
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
    // getSeverity(status: string) {
    //   switch (status) {
    //     case 'unqualified':
    //       return 'danger';
    //
    //     case 'qualified':
    //       return 'success';
    //
    //     case 'new':
    //       return 'info';
    //
    //     case 'negotiation':
    //       return 'warning';
    //
    //     case 'renewal':
    //       return null;
    //   }
    // },

    getData: function (): void {
      if (this.tableData) {
        // this.customers = this.tableData;
      }
    },
  },
})
</script>
