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

          <Column field="name" header="Name" style="min-width: 12rem" sortable>
            <template #body="{ data }">
              {{ data.name }}
            </template>
            <template #filter="{ filterModel, filterCallback }">
              <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Search by name" />
            </template>
          </Column>

          <Column header="Country" filterField="country.name" style="min-width: 12rem">
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

          <Column header="Agent" filterField="representative" :showFilterMenu="true" :filterMenuStyle="{ width: '14rem' }" style="min-width: 14rem">
            <template #body="{ data }">
              <div class="flex align-items-center gap-2">
                <img :alt="data.representative.name" src="@/assets/images/group-work.png" style="width: 32px" />
                <span>{{ data.representative.name }}</span>
              </div>
            </template>
            <template #filter="{ filterModel, filterCallback }">
              <MultiSelect v-model="filterModel.value" @change="filterCallback()" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter" style="min-width: 14rem" :maxSelectedLabels="1">
                <template #option="slotProps">
                  <div class="flex align-items-center gap-2">
                    <img :alt="slotProps.option.name" src="@/assets/images/group-work.png" style="width: 32px" />
                    <span>{{ slotProps.option.name }}</span>
                  </div>
                </template>
              </MultiSelect>
            </template>
          </Column>

          <Column field="status" header="Status" :showFilterMenu="true" :filterMenuStyle="{ width: '14rem' }" style="min-width: 12rem">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="getSeverity(data.status)" />
            </template>
            <template #filter="{ filterModel, filterCallback }">
              <PDropdown v-model="filterModel.value" @change="filterCallback()" :options="statuses" placeholder="Select One" class="p-column-filter" style="min-width: 12rem" :showClear="true">
                <template #option="slotProps">
                  <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                </template>
              </PDropdown>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
  </div>
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
import type { ProductTableInterface, CustomerTableInterface } from "@/tables/interfaces";
import {defineComponent} from "vue";
import { FilterMatchMode } from 'primevue/api';

export default defineComponent({
  name: "AmsTable",
  data() {
    return {
      customers: null as CustomerTableInterface[] | null,
      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        status: { value: null, matchMode: FilterMatchMode.EQUALS },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS }
      },
      representatives: [
        { name: 'Amy Elsner', image: 'amyelsner.png' },
        { name: 'Anna Fali', image: 'annafali.png' },
        { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
        { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
        { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
        { name: 'Onyama Limba', image: 'onyamalimba.png' },
        { name: 'Stephen Shaw', image: 'stephenshaw.png' },
        { name: 'XuXue Feng', image: 'xuxuefeng.png' }
      ],
      statuses: ['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'],
      loading: false,
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
    this.customers = [
      { name: "mono", country: { name: "bangladesh" }, representative: { name: "Amy Elsner" }, status: "unqualified" },
      { name: "shumon", country: { name: "italy" }, representative: { name: "Anna Fali" }, status: "qualified" },
      { name: "sb", country: { name: "england" }, representative: { name: "Asiya Javayant" }, status: "new" },
      { name: "babu", country: { name: "Europe" }, representative: { name: "Bernardo Dominic" }, status: "negotiation" },
      { name: "ranjan", country: { name: "America" }, representative: { name: "Elwin Sharvill" }, status: "renewal" },
      { name: "mono", country: { name: "Asia" }, representative: { name: "Ioni Bowcher" }, status: "unqualified" },
      { name: "shumon", country: { name: "Africa" }, representative: { name: "Ivan Magalhaes" }, status: "qualified" },
      { name: "sb", country: { name: "Australia" }, representative: { name: "Onyama Limba" }, status: "new" },
      { name: "babu", country: { name: "India" }, representative: { name: "Stephen Shaw" }, status: "negotiation" },
      { name: "ranjan", country: { name: "China" }, representative: { name: "XuXue Feng" }, status: "renewal" },
    ];
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
    }
  },
})
</script>

<style scoped>

</style>