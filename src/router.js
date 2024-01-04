import { createRouter, createWebHistory } from 'vue-router'
import Login from "./pages/Login.vue";
import AccountSettings from "./pages/settings/AccountSettings.vue";

const routes = [
    // example route { path: '/', component: Main },
    // add other routes here

    { path: '/', component: Login },

    { path: '/settings/account', component: AccountSettings },
    {
        path: '/settings/account',
        name: 'account',
        component: () => import('./pages/settings/AccountSettings.vue')
    },
    {
        path: '/settings/notifications',
        name: 'notifications',
        component: () => import('./pages/settings/NotificationSettings.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
