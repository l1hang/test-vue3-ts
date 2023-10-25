import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { useUserStore } from "@/store/user";
import { ElMessage } from "element-plus";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/layouts/layout/index.vue"),
    children: [
      {
        path: "/residentHealth",
        name: "residentHealth",
        component: () => import("@/views/residentHealth/index.vue"),
      },
      {
        path: "/recordLocation",
        name: "recordLocation",
        component: () => import("@/views/recordLocation/index.vue"),
      },
      {
        path: "/recordTotal",
        name: "recordTotal",
        component: () => import("@/views/recordTotal/index.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/error",
    name: "error",
    component: () => import("@/views/error/index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // const userStore = useUserStore();
  // const token = userStore.token;
  const token = localStorage.getItem("token");
  if (!token && to.path !== "/login") {
    ElMessage({
      message: "登录信息有误，请先登录",
      type: "error",
    });
    next("/login");
  } else if (to.path === "/login" && token) {
    next("/home");
  } else {
    next();
  }
});

export default router;
