import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import sass from 'sass'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    {
      name: 'sass',
      renderChunk: (code) => {
        const { css } = sass.renderSync({ data: code })
        return { code: css.toString() }
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
  },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://172.16.30.19:9080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
