/**
 * Fichier pour le routage des pages
 * File for the pages routes
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  // Home Path - Chemin

  {
    path: '/home',
    name: 'Home',
    component: Home
  },



  // Register Path - Chemin
  {
    path: '/register',
    name: 'register',

    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta:{
      requiresGuest: true
    }
  },

  // Login Path - Chemin
  {
    path: '/login',
    name: 'login',

    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta:{
      requiresGuest: true
    }
  },

  // Profile Path - Chemin
  {
    path: '/profile',
    name: 'profile',

    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
    meta:{
      requiresAuth: true
    }
  },
  // teams Path - Chemin
  {
    path: '/teams',
    name: 'teams',

    component: () => import(/* webpackChunkName: "classement" */ '../views/Teams.vue'),
    meta:{
      requiresAuth: true
    }
  },

  // Classement Path - Chemin
  {
    path: '/classement',
    name: 'classement',

    component: () => import(/* webpackChunkName: "classement" */ '../views/Classement.vue'),
    meta:{
      requiresAuth: true
    }
  },
    // Redirect Chat - Chemin
    {
      path: '/chat',
      name: 'chat',

      component: () => import(/* webpackChunkName: "chat" */ '../views/Chatpage.vue'),
      meta:{
        requiresAuth: true
      }
    },

  // Easter Egg Path - Chemin
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

/**
 * Si la personne n'est pas connecté le site va redirigé vers le page de connexion
 * If the user isn't connected, the website will redirect to the login page
 */
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
  /**
 * Si la personne est connecté le site va redirigé vers le page de profil
 * If the user is connected, the website will redirect to the profile page
 */
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
