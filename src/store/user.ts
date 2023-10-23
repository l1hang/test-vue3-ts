import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    isLoggedIn: false,
    username: '',
  }),
  actions: {
    login(username:any, password:any) {
      // TODO: 实现登录逻辑
      this.isLoggedIn = true
      this.username = username
    },
    logout() {
      // TODO: 实现注销逻辑
      this.isLoggedIn = false
      this.username = ''
    },
  },
})