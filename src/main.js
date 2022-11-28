import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/navbar.scss'
import './assets/styles/main.scss'
import './assets/styles/responsive.scss'
import './assets/styles/products.scss'
import Dropdown from 'vue-simple-search-dropdown';

import 'swiper/css'
Vue.config.productionTip = false
new Vue({
    Dropdown,
    router,
    render: h => h(App)
}).$mount('#app')