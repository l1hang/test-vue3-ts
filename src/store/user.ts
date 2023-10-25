import { defineStore } from 'pinia'
import { ElMessage } from "element-plus";
import router from '@/router';
import { getLogin } from "@/api/residentHealth";
export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    token: localStorage.getItem('token') || ''
  }),
  getters: {

  },
  actions: {
    // 登录
    async Login(data:any){
      const {yhzh,password,code,uuid} = data;
      const res = await getLogin(yhzh,password,code,uuid);
      if(res.code === 200){
        ElMessage({
          message: "登录成功",
          type: "success",
        });
        this.token = res.data.access_token;
        //本地存储token
        localStorage.setItem('token',res.data.access_token)
        router.push('/home')
      }
      return res;
    },
    // 退出登录
    async Logout(){
      this.token = '';
      localStorage.removeItem('token')
      router.push('/login')
    }
  }
})