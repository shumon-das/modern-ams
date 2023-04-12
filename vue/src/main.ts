import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import './assets/main.css'

//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import Button from "primevue/button";
import Menubar from 'primevue/menubar';

//ams
import AmsHeader from "@/views/AmsHeader.vue";
import AmsNavbar from "@/components/headers/AmsNavbar.vue";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);

app.component("AmsButton", Button);
app.component("AmsMenubar", Menubar);

//ams
app.component("AmsHeader", AmsHeader);
app.component("AmsNavbar", AmsNavbar);

app.mount('#app')