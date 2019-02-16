import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Footer from './components/Footer'

// eslint-disable-next-line no-unused-vars
import Alert from './package/alert/index.js';

Vue.component('Footer', Footer)

Vue.component('Alert', Alert)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
