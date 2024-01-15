import { createRouter, createWebHistory } from "vue-router";
import { AuthService } from "./Services/AuthService.js";

import Account from './pages/Account.vue';
import Notifications from './pages/Notifications.vue'

import LoginPage from './pages/LoginPage.vue'
import HomePage from './pages/HomePage.vue'
import ShowTicketPage from './pages/ShowTicketPage.vue'

const routes = [
  // example route { path: '/', component: Main },
  // add other routes here

  {
    path: "/",
    name: "home",
    component: HomePage,
    //meta: { requiresAuth: true }

    children: [
      {
        path: "/settings/account",
        name: "Account",
        component: Account,
        //meta: { requiresAuth: true }
      },
      {
        path: "/settings/notifications",
        name: "Notifications",
        component: Notifications,
        //meta: { requiresAuth: true }
      },
      {
        path: "/settings/password",
        name: "Security",
        component: Security,
        //meta: { requiresAuth: true }
      },
      {
        path: '/ShowTicket',
        name: 'showTicket',
        component: (ShowTicketPage),
        //meta: { requiresAuth: true }
      },
    ],
  },

  {
    path: '/Login',
    name: 'login',
    component: (LoginPage),
    beforeEnter: async (to, from, next) => { //check if user is already logged in and redirect to home page
      const authResult = await AuthService.checkAuth();

      if (authResult.success) {
        next({ name: "home" });
      } else {
        next();
      }
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    try {
      const authResult = await AuthService.checkAuth();

      if (!authResult.success) {
        next({
          name: "login",
          query: { redirect: to.fullPath },
        });
      } else {
        next();
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      next({
        name: "login",
        query: { redirect: to.fullPath },
      });
    }
  } else {
    next();
  }
});

export default router;
