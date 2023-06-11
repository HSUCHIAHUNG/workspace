import { createRouter, createWebHashHistory } from 'vue-router'
import {  routes } from './routeltems'
import { setupRoutePermission } from './permission'

const routerInstane = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

// export後main.js掛載router後接著執行router路由守衛
export function setupRouter(AppInstance) {
  AppInstance.use(routerInstane)
  setupRoutePermission(routerInstane)
}



