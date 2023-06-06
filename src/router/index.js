import { createRouter, createWebHistory } from 'vue-router'
import cat from '../view/cata.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: cat
    },
    {
        path: '/cata',
        name: 'cata',
        component: () => import('../view/cata.vue')
    },
    {
        path: '/catb',
        name: 'catb',
        component: () => import('../view/catb.vue')
    },
    {
        path: '/catc',
        name: 'catc',
        meta: {
            requiresAuth: true // 添加一個 meta 屬性來標記需要登錄的頁面
        },
        component: () => import('../view/catc.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/AboutView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
      alert('請登入會員')
      return
    }
    
    next() 
    
  })
  
  


export default router


