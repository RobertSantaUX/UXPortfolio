import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/styles.css'
import '@/assets/css/bootstrap-width.ext.css'
import HomeIcon from 'vue-material-design-icons/Home'

Vue.config.productionTip = false

Vue.component('home-icon', HomeIcon);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
