import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/routes'
import ElementPlus from 'element-plus'

import '@/assets/scss/main.scss'
import '@/assets/fonts/stylesheets.css'
import 'element-plus/dist/index.css'

createApp(App).use(router).use(ElementPlus).use(createPinia()).mount('#app')
