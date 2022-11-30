import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Women from '../views/Women.vue'
import Men from '../views/Men.vue'
import Kids from '../views/Kids.vue'
import Shoes from '../views/Shoes.vue'
import Hats from '../views/Hats.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/products/women',
        name: 'women',
        component: Women
    },
    {
        path: '/products/men',
        name: 'men',
        component: Men
    },
    {
        path: '/products/kids',
        name: 'kids',
        component: Kids
    },
    {
        path: '/products/shoes',
        name: 'shoes',
        component: Shoes
    },
    {
        path: '/products/hats',
        name: 'hats',
        component: Hats
    },
]

const router = new VueRouter({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes
})

export default router