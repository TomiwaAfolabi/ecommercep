import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./assets/base.css";
import "./assets/main.css";
import veeValidationPlugin from "../src/includes/validate";
import router from "./router";

const app = createApp(App);
app.use(veeValidationPlugin);
app.use(createPinia());
app.use(router);
app.mount("#app");
