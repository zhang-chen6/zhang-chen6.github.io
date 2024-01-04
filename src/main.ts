import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import axios from 'axios'
import eCharts from '@/utils/echarts'
import dir from './directive'

import 'element-plus/dist/index.css'

// import 'default-passive-events'
import 'echarts-gl'

import App from './App.vue'

const app = createApp(App)

// 创建全局axios实例
const axiosInstance = axios.create({
  timeout: 60000
})
app.provide('$axios', axiosInstance)
app.provide('$eCharts', eCharts)
app.directive('preventReClick', dir.preventReClick)
app.directive('selectLoadMore', dir.selectLoadMore)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.mount('#app')
