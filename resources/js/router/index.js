// import Router from 'vue-router'
import Vue from 'vue'
import VueRouter from 'vue-router'
import {
  TokenService
} from '../services/TokenService'
import EventBus from '../services/event'
import backend_routes from './backend_routes'
import Welcome from '../views/pages/frontend/Welcome'


Vue.use(VueRouter)

let frontend_routes = [

  {
    path: '/welcome',
    name: 'welcome',
    meta: {
      layout: "frontend",
      public: true,
      onlylogout: true
    },
    component: Welcome
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: "frontend",
      public: true,
      onlylogout: true
    },
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/pages/frontend/Login.vue')
  },
  // {
  //   path: '/forgot',
  //   name: 'forgot',
  //   meta: {
  //     layout: "frontend",
  //     public: true,
  //     onlylogout: true
  //   },
  //   component: () =>
  //     import( /* webpackChunkName: "about" */ '../views/frontend/Forgot.vue')
  // },
  {
    path: '/',
    redirect: {
      name: 'welcome'
    }
  },
  {
    path: '*',
    name: 'page404',
    meta: {
      layout: "frontend",
      public: true,
      onlylogout: true,
      // middleware: [ auth]
    },
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/pages/Page404.vue')
  }
];

const routes = frontend_routes.concat(backend_routes)
// console.log(backend_routes)
const router = new VueRouter({
  mode: 'history',
  linkActiveClass: "active",
  linkExactActiveClass: "active",
  routes,
  scrollBehavior() {
    window.scrollTo(0, 0);
  }
});

// router.beforeResolve((to, from, next) => {
//   if (to.name) {
//     // NProgress.start();
//     EventBus.$emit("loading", true)
//   }
//   next();
// });

// router.afterEach((to, from) => {
//   // NProgress.done();
//   EventBus.$emit("loading", false)
// });
// router.beforeEach((to, from, next) => {
//   const isPublic = to.matched.some(record => record.meta.public)
//   const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlylogout)
//   let loggedIn = !!TokenService.getToken();
//   if (!isPublic && !loggedIn && to.path !== '/login') {
//       return next({
//           path: '/login',
//           // query: {
//           //     redirect: to.fullPath
//           // } // Store the full path to redirect the user to after login
//       });

//   }
//   if (loggedIn && onlyWhenLoggedOut) {
//       return next('/home')
//   }
//   next();
// });

export default router