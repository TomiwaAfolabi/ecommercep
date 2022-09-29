import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/home/homepage-component.vue";
import Login from "../components/form/form-component.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
