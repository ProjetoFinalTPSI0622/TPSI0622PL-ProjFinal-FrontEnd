import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    // example route { path: '/', component: Main },
    // add other routes here
<<<<<<< Updated upstream
=======


    {
        path: '/',
        name: 'home',
        component: (HomePage),
        //meta: { requiresAuth: true }
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
>>>>>>> Stashed changes
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
