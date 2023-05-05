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

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);

app.component("AmsButton", Button);
app.component("AmsMenubar", Menubar);
app.component("PrimeCard", Card);
app.component("PrimeSteps", Steps);
app.component("PModal", Dialog);
app.component("InputText", InputText);
app.component("PPassword", Password);
app.component("PDropdown", Dropdown);

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

app.mount('#app')
