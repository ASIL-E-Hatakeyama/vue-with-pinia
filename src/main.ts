import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./settings/router";

const app = createApp(App);
app.use(router); // Router
app.use(createPinia()); // Pinia
app.mount("#app");
