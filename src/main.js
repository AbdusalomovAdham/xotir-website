import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/routes'

import '@/assets/scss/main.scss'
import '@/assets/fonts/stylesheets.css'

createApp(App).use(router).use(createPinia()).mount('#app')
