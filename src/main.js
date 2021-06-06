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
import JwPagination from 'jw-vue-pagination';
import PrimeVue from 'primevue/config'
import DataTable from 'primevue/datatable'
import InputText from 'primevue/inputtext'
import Column from 'primevue/column'
import MultiSelect from 'primevue/multiselect'
import Calender from 'primevue/calendar'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'
import Slider from 'primevue/slider'
import ProgressBar from 'primevue/progressbar'
import Dropdowm from 'primevue/dropdown'

import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);
app.config.globalProperties.$http = http
app.config.globalProperties.$showTicketModal = false

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
app.use(PrimeVue)
app.use(router)
app.use(store)

app.component('modal', Modal)
app.component('jw-pagination', JwPagination)
app.component('DataTable', DataTable)
app.component('InputText', InputText)
app.component('Column', Column)
app.component('Calendar', Calender)
app.component('MultiSelect', MultiSelect)
app.component('InputNumber', InputNumber)
app.component('Button', Button)
app.component('Slider', Slider)
app.component('ProgressBar', ProgressBar)
app.component('Dropdown', Dropdowm)
app.mount('#app')
