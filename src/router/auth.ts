import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export function requireAuth(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  const isAuthenticated = localStorage.getItem('isAuthenticated')
  if (isAuthenticated === 'true') {
    next()
  } else {
    next('/login')
  }
}