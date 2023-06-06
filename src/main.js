import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/index.js'
// main.ts
import 'virtual:uno.css';
import "./assets/css/reset.css";


createApp(App).use(router).mount('#app')

