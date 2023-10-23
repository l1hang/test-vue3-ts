import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { requireAuth } from "./auth";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/layouts/layout/index.vue"),
    // beforeEnter: requireAuth,
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
export default router;
// function login() {
//   // 登录成功后将用户的登录状态保存到 localStorage 中
//   localStorage.setItem('isAuthenticated', 'true')
//   // 跳转到首页
//   router.push('/home')
// }
