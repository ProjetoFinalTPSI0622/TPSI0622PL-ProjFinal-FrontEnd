import { createRouter, createWebHistory } from 'vue-router'
import { AuthService } from "./Services/AuthService.js";


import Login from "./pages/Login.vue";
import LoginPage from './pages/LoginPage.vue'
import HomePage from './pages/HomePage.vue'
import Account from './components/Settings/notifications/Account.vue'
import Notifications from './components/Settings/notifications/Notifications.vue'

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
        path: '/settings/account',
        name: 'account',
        component: (Account),
        meta: { requiresAuth: true}
    },
    {
        path: '/settings/notifications',
        name: 'notifications',
        component: (Notifications),
        meta: { requiresAuth: true }
    },
    {

    },
    {
        path: '/Login',
        name: 'login',
        component: (LoginPage),
        beforeEnter: async (to, from, next) => { //check if user is already logged in and redirect to home page
            const authResult = await AuthService.checkAuth();

            if (authResult.success) {
                next({ name: 'home' });
            } else {
                next();
            }
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(async (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        try {

            const authResult = await AuthService.checkAuth();

            if (!authResult.success) {
                next({
                    name: 'login',
                    query: { redirect: to.fullPath }
                });
            } else {
                next();
            }
        } catch (error) {
            console.error('Error during authentication:', error);
            next({
                name: 'login',
                query: { redirect: to.fullPath }
            });
        }
    } else {
        next();
    }
});

export default router
