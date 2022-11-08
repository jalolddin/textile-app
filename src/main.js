import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/navbar.scss'
import './assets/styles/main.scss'
import './assets/styles/responsive.scss'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/css'
Vue.config.productionTip = false
new Vue({
  router,
  VueAwesomeSwiper,
  render: h => h(App)
}).$mount('#app')
