// import Router from 'vue-router'
import Vue from 'vue'
import VueRouter from 'vue-router'
import {
  TokenService
} from '../services/TokenService'
import EventBus from '../services/event'
 import store from '../store'
import backend_routes from './backend_routes'
import Welcome from '../views/pages/frontend/Welcome'


Vue.use(VueRouter)

let frontend_routes = [

  {
    path: '/welcome',
    name: 'welcome',
    meta: {
      layout: "frontend",
      requireAuth: false
    },
    component: Welcome
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: "frontend",
      requireAuth: false
    },
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/pages/frontend/Login.vue')
  },
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
      requireAuth: false
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

router.beforeResolve((to, from, next) => {
  if (to.name) {
    // NProgress.start();
    EventBus.$emit("loading", true)
  }
  next();
});

router.afterEach((to, from) => {
  // NProgress.done();
  EventBus.$emit("loading", false)
});

router.beforeEach((to, from, next) => {
    const requiredAuth = to.meta.requireAuth
    const isAdmin = to.meta.is_admin
    const role = store.state.authmodule.user.role;
    let loggedIn = !!TokenService.getToken();
    if (requiredAuth) {
        if (!loggedIn) {
            next({
                name: 'login'
            })
        } else {
          switch (role) {
            case 'Admin':
                next('/dashboard')
              break;
            case 'Company':
             next('/home')
             break;
            case 'Employee':
             next('/profile')
             break;
          
            default:
              next()
              break;
          }
        }
        
    }else{
      next()
    }
})

export default router