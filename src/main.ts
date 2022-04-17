import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./settings/router";

const app = createApp(App);
app.use(router); // Router
const pinia = createPinia();
app.use(pinia); // Pinia
app.mount("#app");
