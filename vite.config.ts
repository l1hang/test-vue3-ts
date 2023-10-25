
import { defineConfig ,loadEnv } from 'vite'  //lodEnv 用于加载环境变量
import vue from '@vitejs/plugin-vue'

import sass from 'sass'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import path from 'path'
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '') 
  return {
    base:env.NODE_ENV === 'production' ? './' : env.VITE_APP_ROUTE_PREFIX,
    resolve:{
      //设置别名
      alias:{
        '@':path.resolve(__dirname,'src'),
        '@components':path.resolve(__dirname,'src/components')
      }
    },
    plugins:[
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      {
        name:'sass',
        renderChunk:(code)=>{
          const {css} = sass.renderSync({data:code})
          return {code:css.toString()}
        }
      }
    ],
    server:{
      proxy:{
        ['^' + env.VITE_APP_API_PREFIX]:{
          target:env.VITE_APP_SERVER_URL,
          changeOrigin:true,
          rewrite:(path) => {
            return path.replace(new RegExp('^' + env.VITE_APP_API_PREFIX), '')
          },
        }
      }
    },
    cors:true,
    // build:{
    //   terserOptions:{
    //     compress:{
    //       keep_infinity:true,
    //       drop_console:true
    //     }
    //   }
    // }
  }
})
