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

//ams
import AmsHeader from "@/views/AmsHeader.vue";
import AmsNavbar from "@/components/headers/AmsNavbar.vue";
import SectionOne from "@/components/home/SectionOne.vue";
import SectionTwo from "@/components/home/SectionTwo.vue";
import SectionThree from "@/components/home/SectionThree.vue";
import AmsCard from "@/components/micro/AmsCard.vue";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);

app.component("AmsButton", Button);
app.component("AmsMenubar", Menubar);
app.component("PrimeCard", Card);

//ams
app.component("AmsHeader", AmsHeader);
app.component("AmsNavbar", AmsNavbar);
app.component("SectionOne", SectionOne);
app.component("SectionTwo", SectionTwo);
app.component("SectionThree", SectionThree);
app.component("AmsCard", AmsCard);

app.mount('#app')
