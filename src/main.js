import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './router'
import App from './App.vue'
import store from './store/store'
import VueResource from 'vue-resource'

// Bootstrap styles
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueResource)

Vue.http.options.root="https://stock-trader-ae3b7.firebaseio.com/"

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})

const router = new VueRouter({
  mode: 'hash',
  routes
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
