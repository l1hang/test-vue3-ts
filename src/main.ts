import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' //导入路由
import Particles from "particles.vue3";//导入登录页面的css
import { createPinia } from 'pinia' //导入pinia
const pinia = createPinia() //创建pinia实例
const env = import.meta.env //获取环境变量
console.log(env, 'env');


createApp(App).use(router).use(Particles).use(pinia).mount('#app')  //创建实例并挂载
