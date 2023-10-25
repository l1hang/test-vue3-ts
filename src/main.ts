import './style.css'
import 'element-plus/dist/index.css' //导入element-plus的css

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' //导入路由
import store from './store' //导入pinia
import Particles from 'particles.vue3' //导入粒子特效



const env = import.meta.env //获取环境变量
console.log(env, 'env');


createApp(App).use(router).use(Particles).use(store).mount('#app')  //创建实例并挂载
