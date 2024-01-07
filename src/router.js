import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from './components/pages/LoginPage.vue'
import HomePage from './components/pages/HomePage.vue'
import { AuthService } from "./Services/AuthService.js";

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

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if(!AuthService.checkAuth().success) {
            console.log("not authed")
            next({
                name: 'login',
                query: {redirect: to.fullPath}
            })
        }
        else{
            console.log("authed")
            next();
        }
    }
    else{
        next();
    }
})
export default router
