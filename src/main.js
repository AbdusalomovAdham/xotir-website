import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routes'

import '@/assets/scss/main.scss'
import '@/assets/fonts/stylesheets.css'

createApp(App).use(router).mount('#app')
