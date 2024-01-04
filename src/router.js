import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from './components/pages/LoginPage.vue'
import HomePage from './components/pages/HomePage.vue'
import useAuthStore from './Stores/AuthStore';

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

router.beforeEach((to, from, next) => {
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = useAuthStore.getIsAuthed();
})

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
