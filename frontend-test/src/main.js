import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueAxios from "vue-axios";
import axios from "axios";

import homeComponent from './components/home.vue';
import pokemonComponent from './components/pokemon.vue';
import function1Component from './components/function1.vue';
import function2Component from './components/function2.vue';
import function3Component from './components/function3.vue';

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const routes = [
  { path: '/', name: 'home', component: homeComponent },
  { path: '/pokemon', name: 'pokemon', component: pokemonComponent },
  { path: '/function1', name: 'function1', component: function1Component },
  { path: '/function2', name: 'function2', component: function2Component },
  { path: '/function3', name: 'function3', component: function3Component }
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
