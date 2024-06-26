import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import qs from 'qs'
import elementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import * as icons from '@element-plus/icons-vue'
import Vue3Storage from 'vue3-storage'
import * as echarts from 'echarts'
import http from './services/loading.js'
import autocounter from 'vue3-autocounter'

const app = createApp(App)

app.use(Vue3Storage)
app.use(router)
app.use(elementPlus, { locale })

app.config.globalProperties.$qs = qs
app.config.globalProperties.$axios = http

Object.keys(icons).forEach((key) => {
  app.component(key, icons[key])
})
app.config.globalProperties.$echarts = echarts
app.component('vue3-autocounter', autocounter)
app.mount('#app')
