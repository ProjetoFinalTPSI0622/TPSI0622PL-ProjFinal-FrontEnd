import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from './components/pages/LoginPage.vue'
import HomePage from './components/pages/HomePage.vue'
import { useAuthStore } from "./Stores/AuthStore.js";

const authGuard = (to, from, next) => {

    const authStore = useAuthStore();

    console.log(authStore.getIsAuthed)

    if (to.meta.requiresAuth && !authStore.getIsAuthed) {
        next('/login');
    } else {
        next();
    }
};

const routes = [
    // example route { path: '/', component: Main },
    // add other routes here

    {
        path: '/',
        name: 'home',
        component: (HomePage),
        meta: { requiresAuth: true }
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

router.beforeEach(authGuard);

export default router
