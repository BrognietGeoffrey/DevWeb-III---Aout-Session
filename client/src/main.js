/**
 * Fichier pour les token
 * Files for the token
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

// Setting up default vue's http modules for api calls
Vue.prototype.$http = axios;

// Load the token from the localstorage
const token = localStorage.getItem("token");

// If there is any token, append defauld axios authorization headers
if(token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
