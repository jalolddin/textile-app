import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/navbar.scss'
import './assets/styles/main.scss'
import './assets/styles/responsive.scss'
import './assets/styles/products.scss'
import Dropdown from 'vue-simple-search-dropdown';

import 'swiper/css'
import i18n from './i18n'
Vue.config.productionTip = false
new Vue({
    Dropdown,
    router,
    i18n,
    render: h => h(App)
}).$mount('#app')