import { createRouter, createWebHistory } from "vue-router";
import { AuthService } from "./Services/AuthService.js";

import Account from './pages/Account.vue';
import Notifications from './pages/Notifications.vue'
import Security from './pages/security.vue'

import LoginPage from './pages/LoginPage.vue'
import Layout from './pages/Layout.vue'
import ShowTicketPage from './pages/ShowTicketPage.vue'
import UsersPage from './pages/UsersPage.vue'
import CreateTicketPage from './pages/CreateTicketPage.vue'

const routes = [
  // example route { path: '/', component: Main },
  // add other routes here

  {
    path: "/",
    name: "home",
    component: Layout,
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
        path: "/settings/security",
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
      {
        path: '/Users',
        name: 'Users',
        component: (UsersPage),
        //meta: { requiresAuth: true }
      },
      {
        path: '/CreateTicket',
        name: 'CreateTicket',
        component: (CreateTicketPage),
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
