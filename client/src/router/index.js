import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  // Home Path
  {
    path: '/home',
    name: 'Home',
    component: Home
  },



  // Register Path
  {
    path: '/register',
    name: 'register',

    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta:{
      requiresGuest: true
    }
  },

  // Login Path
  {
    path: '/login',
    name: 'login',

    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta:{
      requiresGuest: true
    }
  },

  // Profile Path
  {
    path: '/profile',
    name: 'profile',

    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
    meta:{
      requiresAuth: true
    }
  },
  // teams Path
  {
    path: '/teams',
    name: 'teams',

    component: () => import(/* webpackChunkName: "classement" */ '../views/Teams.vue'),
    meta:{
      requiresAuth: true
    }
  },

  // Classement Path
  {
    path: '/classement',
    name: 'classement',

    component: () => import(/* webpackChunkName: "classement" */ '../views/Classement.vue'),
    meta:{
      requiresAuth: true
    }
  },
    // Redirect Chat
    {
      path: '/chat',
      name: 'chat',

      component: () => import(/* webpackChunkName: "chat" */ '../views/Chatpage.vue'),
      meta:{
        requiresAuth: true
      }
    },

  // Easter Egg Path
  {
    path: '/easteregg',
    name: 'easteregg',

    component: () => import(/* webpackChunkName: "easteregg" */ '../views/Easteregg.vue'),
    meta:{
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!store.getters.isLoggedIn){
      //Redirect to the login Page
      next('/login');
    }
    else {
      next();
    }
  }
  else if (to.matched.some(record => record.meta.requiresGuest)){
    if(store.getters.isLoggedIn){
      //Redirect to the profile Page
      next('/profile');
    }
    else {
      next();
    }
  }
  else{
    next()
  }
});

export default router
