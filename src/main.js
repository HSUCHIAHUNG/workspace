import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/index.js'
import 'virtual:uno.css';
import "./assets/css/reset.css";
// import Swal from 'sweetalert2';
import { createPinia } from 'pinia'

const pinia = createPinia() 

createApp(App)
    .use(router)
    .use(pinia)
    // .use(Swal)
    .mount('#app')

