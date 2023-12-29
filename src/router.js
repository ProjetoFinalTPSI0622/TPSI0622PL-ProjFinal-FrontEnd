import { createRouter, createWebHistory } from 'vue-router'
import AccountSettings from "./pages/settings/AccountSettings.vue";

const routes = [
    // example route { path: '/', component: Main },
    // add other routes here

    { path: '/', component: AccountSettings },
    { path: '/1', page: NotificationSettings },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
