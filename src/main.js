import { createApp } from 'vue'
import '@/assets/css/tailwind.css'
import App from './App.vue'
import router from './router'
import http from './http-common'
import store from './store'
import Vue3NativeNotification from 'vue3-native-notification'
import Modal from './components/Layouts/Modal.vue'
import vue3notification from 'notification_vue_3'
import Toaster from '@meforma/vue-toaster';

const app = createApp(App);
app.config.globalProperties.$http = http
app.config.globalProperties.$showTicketModal = false

app.component('modal', Modal)
app.use(Vue3NativeNotification, {
    // Automatic permission request before
    // showing notification (default: true)
    requestOnNotify: true,
})
app.use(vue3notification)
app.use(Toaster, {
    // One of the options
    position: 'top'
})

app.use(router)
app.use(store)

app.mount('#app')
