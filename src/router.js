import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from './components/pages/LoginPage.vue'
import HomePage from './components/pages/HomePage.vue'

const routes = [
    // example route { path: '/', component: Main },
    // add other routes here

    {
        path: '/',
        name: 'home',
        component: (HomePage),
    },

    {
        path: '/login',
        name: 'login',
        component: (LoginPage),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
