import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import 'virtual:uno.css';
import "./assets/css/reset.css";
import { setupRouter } from './router/index'
import { setupSwal, setupVeeValidator } from '@/plugins'
import { setupPinia } from './stores/index'


async function setupApp() {
    const AppInstance = createApp(App)
  
    setupVeeValidator(AppInstance) //表單驗證
  
    setupPinia(AppInstance) 
    
    setupSwal(AppInstance) 
  
    await setupRouter(AppInstance) // 一般的router
    
    AppInstance.mount('#app')
  }
  
  setupApp()

