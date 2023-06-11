// 設定路由
export const routes = [
    {
        path: '/Login',
        name: 'Login',
        meta: {
        },
        component: () => import('../view/Login.vue')
    },
    {
        path: '/',
        name: 'def_layout',
        component: () =>  import('../view/default_layout.vue'),
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