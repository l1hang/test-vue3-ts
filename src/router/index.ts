import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { requireAuth } from './auth'
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/residentHealth/index.vue"),
    // beforeEnter: requireAuth
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
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