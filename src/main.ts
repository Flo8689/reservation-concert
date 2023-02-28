import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);


// create a Pinia store
const pinia = createPinia()
app.use(pinia)

app.mount('#app')


// createApp(App).use(createPinia()).mount('#app')