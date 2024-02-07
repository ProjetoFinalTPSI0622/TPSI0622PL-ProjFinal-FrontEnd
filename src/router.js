import { createRouter, createWebHistory } from "vue-router";
import { AuthService } from "@/Services/AuthService.js";

const routes = [
  // example route { path: '/', component: Main },
  // add other routes here

  {
    path: "/",
    name: "home",
    component: () => import('@/pages/Layout.vue'),
    meta: { requiresAuth: true },

    children: [
      {
        path: '/settings/account',
        name: 'Account',
        component: () => import('@/pages/Account.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/settings/notifications',
        name: 'Notifications',
        component: () => import('@/pages/Notifications.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/settings/security',
        name: 'Security',
        component: () => import('@/pages/security.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/settings/configurations',
        name: 'Configurations',
        component: () => import('./pages/ConfigureAppPage.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/tickets/show',
        name: 'showTicket',
        component: () => import('@/pages/ShowTicketPage.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/tickets/create',
        name: 'CreateTicket',
        component: () => import('@/pages/CreateTicketPage.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/tickets/:ticketId',
        name: 'ticketDetails',
        component: () => import('@/pages/TicketDetailsPage.vue'),
      },
      {
        path: '/users',
        name: 'Users',
        component: () => import('@/pages/UsersPage.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/users/create',
        name: 'CreateUsers',
        component: () => import('@/pages/CreateUserPage.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/users/:userId',
        name: 'userDetails',
        component: () => import('@/pages/UserDetailsPage.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/pages/Dashboard.vue'),
        meta: { requiresAuth: true }
      },
    ],

  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFoundPage.vue'),
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/LoginPage.vue'),
    beforeEnter: async (to, from, next) => { //check if user is already logged in and redirect to home page
      const authResult = await AuthService.checkAuth();

      if (authResult.success) {
        next({ name: "home" });
      } else {
        next();
      }
    }
  },
    {
      path: '/logout',
      name: 'Logout',
      component: () => import('@/pages/LogoutPage.vue'),
      beforeEnter: async (to, from, next) => {
        const authResult = await AuthService.userLogout();

        if (authResult.success) {
          next({ name: "Login" });
        } else {
          next({ name: "Login" });
        }
      }
    }
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
          name: "Login",
          query: { redirect: to.fullPath },
        });
      } else {
        next();
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      next({
        name: "Login",
        query: { redirect: to.fullPath },
      });
    }
  } else {
    next();
  }

});

export default router;
