import { createRouter, createWebHistory } from 'vue-router'
import def_layout from '../components/default_layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'def_layout',
      component: def_layout,
      children: [
        {
          path: '',
          name: 'cata',
          component: () => import('../view/cata.vue')
        },
        {
            path: 'catb',
            name: 'catb',
            component: () => import('../view/catb.vue')
        },
        {
            path: 'catc',
            name: 'catc',
            meta: {
                requiresAuth: true // 添加一個 meta 屬性來標記需要登錄的頁面
            },
            component: () => import('../view/catc.vue')
        },
        
      ],
    },
    {
      path: '/cat_supplies',
      name: 'cat_supplies',
      component: () => import('../view/cat_supplies/index.vue')
    },
    {
      path: '/cat_supplies/:id',
      name: 'cat_supplies_id',
      component: () => import('../view/cat_supplies/_id.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
      alert('請登入會員')
      next(false) 
      return
    }
    
    next() 
  })
  
  

export default router


