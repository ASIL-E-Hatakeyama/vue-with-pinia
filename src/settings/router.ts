import Err404Page from "@/pages/error/Err404Page.vue";
import LoginPage from "@/pages/login/LoginPage.vue";
import TodoPage from "@/pages/todo/TodoPage.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { useLoginInfoStore } from "./store";

// Route
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: LoginPage,
    meta: {
      isAuthenticated: false,
    },
  },
  {
    path: "/todo",
    component: TodoPage,
    meta: {
      isAuthenticated: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: Err404Page,
    meta: {
      isAuthenticated: false,
    },
  },
];

// Router定義
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 遷移前チェック(認証チェックとか)
router.beforeEach((to, from, next) => {
  const loginInfoStore = useLoginInfoStore();
  if (
    to.meta?.isAuthenticated &&
    !(loginInfoStore.token && loginInfoStore.userName)
  ) {
    next({ path: "/" });
  } else {
    next();
  }
});

export default router;
