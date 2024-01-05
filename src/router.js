import { createRouter, createWebHistory } from 'vue-router'
import Login from "./pages/Login.vue";

const routes = [
    // example route { path: '/', component: Main },
    // add other routes here

    { path: '/', component: Login },

    {
        path: '/settings/account',
        name: 'account',
        component: () => import('./pages/settings/Account.vue')
    },
    {
        path: '/settings/notifications',
        name: 'notifications',
        component: () => import('./pages/settings/Notifications.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
