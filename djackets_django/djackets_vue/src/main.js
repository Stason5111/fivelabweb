import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'https://api.dev.stason5111.ru'

createApp(App).use(store).use(router, axios).mount('#app')
