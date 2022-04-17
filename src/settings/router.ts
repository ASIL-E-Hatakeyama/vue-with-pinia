import LoginPage from "@/pages/login/LoginPage.vue";
import TodoPage from "@/pages/todo/TodoPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";

// Route
const routes = [
  { path: "/", component: LoginPage },
  { path: "/todo", component: TodoPage },
];

// Router定義
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
