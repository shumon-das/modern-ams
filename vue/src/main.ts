import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import '/node_modules/primeflex/primeflex.css';
import './assets/main.css'

//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import Button from "primevue/button";
import Menubar from 'primevue/menubar';
import Card from 'primevue/card';
import Steps from 'primevue/steps';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Dropdown from 'primevue/dropdown';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional
import Tag from 'primevue/tag';
import MultiSelect from 'primevue/multiselect';
import Chart from 'primevue/chart';

//ams
import AmsHeader from "@/views/AmsHeader.vue";
import AmsNavbar from "@/components/headers/AmsNavbar.vue";
import SectionOne from "@/components/home/SectionOne.vue";
import SectionTwo from "@/components/home/SectionTwo.vue";
import SectionThree from "@/components/home/SectionThree.vue";
import AmsCard from "@/components/micro/AmsCard.vue";
import LogIn from "@/components/LogIn.vue";
import AmsSteps from "@/components/micro/AmsSteps.vue";
import AmsModal from "@/components/micro/AmsModal.vue";
import ValidationMessage from "@/components/micro/ValidationMessage.vue";
import AmsSelect from "@/components/micro/AmsSelect.vue";
import AmsTable from "@/components/micro/AmsTable.vue";
import DynamicTable from "@/components/micro/DynamicTable.vue";
import AmsCustomers from "@/views/AmsCustomers.vue";
import AmsCustomSwitch from "@/components/micro/custom/AmsCustomSwitch.vue";
import AmsCharts from "@/components/micro/custom/AmsCharts.vue";
import BasicChart from "@/components/micro/charts/BasicChart.vue";
import VerticalChart from "@/components/micro/charts/VerticalChart.vue";
import HorizontalChart from "@/components/micro/charts/HorizontalChart.vue";
import StackedBarChart from "@/components/micro/charts/StackedBarChart.vue";
import DoughnutChart from "@/components/micro/charts/DoughnutChart.vue";
import PieChart from "@/components/micro/charts/PieChart.vue";
import LineChart from "@/components/micro/charts/LineChart.vue";
import LineStyleChart from "@/components/micro/charts/LineStyleChart.vue";
import PolarChart from "@/components/micro/charts/PolarChart.vue";
import RadarChart from "@/components/micro/charts/RadarChart.vue";
import TestTable from "@/views/TestTable.vue";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);

app.component("AmsButton", Button);
app.component("AmsMenubar", Menubar);
app.component("PCard", Card);
app.component("PrimeSteps", Steps);
app.component("PModal", Dialog);
app.component("InputText", InputText);
app.component("PPassword", Password);
app.component("PDropdown", Dropdown);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("ColumnGroup", ColumnGroup);
app.component("Row", Row);
app.component("Tag", Tag);
app.component("MultiSelect", MultiSelect);
app.component("Chart", Chart);

// micro
app.component("BasicChart", BasicChart);
app.component("VerticalChart", VerticalChart);
app.component("HorizontalChart", HorizontalChart);
app.component("StackedBarChart", StackedBarChart);
app.component("DoughnutChart", DoughnutChart);
app.component("PieChart", PieChart);
app.component("LineChart", LineChart);
app.component("LineStyleChart", LineStyleChart);
app.component("PolarChart", PolarChart);
app.component("RadarChart", RadarChart);

//ams
app.component("AmsHeader", AmsHeader);
app.component("AmsNavbar", AmsNavbar);
app.component("SectionOne", SectionOne);
app.component("SectionTwo", SectionTwo);
app.component("SectionThree", SectionThree);
app.component("AmsCard", AmsCard);
app.component("AmsSteps",AmsSteps);
app.component("LogIn", LogIn);
app.component("AmsModal", AmsModal);
app.component("ValidationMessage", ValidationMessage);
app.component("AmsSelect", AmsSelect);
app.component("AmsTable", AmsTable);
app.component("DynamicTable", DynamicTable);
app.component("AmsCustomers", AmsCustomers);
app.component("AmsCharts", AmsCharts);

// custom
app.component("AmsCustomSwitch", AmsCustomSwitch);
app.component("TestTable", TestTable);

app.mount('#app')
