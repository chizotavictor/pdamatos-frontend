import { createApp } from 'vue'
import '@/assets/css/tailwind.css'
import App from './App.vue'
import router from './router'
import vueHeadful from 'vue-headful'

createApp(App)
    .use(router)
    .use(vueHeadful)
    .mount('#app')
