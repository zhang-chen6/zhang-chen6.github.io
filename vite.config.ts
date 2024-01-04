import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 按需加载element-plus
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '@c': path.resolve('src/components')
    }
  },
  // 代理
  server: {
    host: 'localhost',
    port: 8080,
    open: true,
    cors: true,
    proxy: {
      '/hnxf': {
        target: 'http://pre.chenglang.cloud', //pre
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/yuqing/': {
        target: 'http://180.168.55.66:2911/emsGovtServer/api/', //后端接口地址
        changeOrigin: true, //是否允许跨越
        ws: true,
        rewrite: (path) => path.replace(/^\/yuqing/, '')
      },
      '/yuqingImg/': {
        target: 'http://180.168.55.66:2911/', //后端接口地址
        changeOrigin: true, //是否允许跨越
        ws: true,
        rewrite: (path) => path.replace(/^\/yuqingImg/, '')
      },
      '/resources': {
        target: 'http://pre.chenglang.cloud/zzgkfz',
        changeOrigin: true,
        ws: true
      }
    }
  }
})
