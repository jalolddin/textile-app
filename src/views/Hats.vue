<template>
    <div class="products">
    
    <div class="products__category"> 
      <div>
        <router-link :to="{name: 'home'}">
        <img src="../assets/icons/back.png" alt="">
        </router-link>
        <h1>Наши продукты</h1>
      </div>
        <select name="categories" id="#">
    <option  v-for="( index, category) in categories" :key="index" :value="category.title_ru">{{category.title_uz}}</option>
        </select>
    </div>
    <div class="products__clothes">
        <div v-show="product.category_title_uz == 'Bosh kiyimlar'" v-for="product in products" :key="product">
            <img :src="`${'https://amiragroup.uz/' + product.photo_link}`" alt="">
            <h3>{{product.title_ru}}</h3>
        </div>
    </div>
    
    <!-- Footer -->
    
    <div class="main__footer">
    <div class="logo">
      <img src="../assets/images/amiran__logo.png" alt="">
      <h3> сочетание стиля и комфорта</h3>
    </div>
    <div class="line"></div>
    <div class="address">
      <h2>Адрес</h2>
      <div>
      <p>Ферганская область, Ташлакский <br> район ул.Мухандис - 214 дом</p>
      </div>
    </div>
    <div class="line"></div>
    <div class="contact">
      <h2>Контакты</h2>
      <div>
      <p>+998934820707</p>
      <p>amiragroup.uz@gmail.com</p>
      </div>
    </div>
    <div class="line"></div>
    <div class="social">
      <h2>Социальные сеть</h2>
      <div>
        <img src="../assets/icons/telegram.svg" alt="">
        <img src="../assets/icons/instagram.svg" alt="">
        <img src="../assets/icons/facebook.svg" alt="">
        <img src="../assets/icons/youtube.svg" alt="">
      </div>
    
    </div>
    
    </div>
    </div>    
    </template>
    <script>
    import Navbar from '../components/Navbar.vue'
    import Dropdown from 'vue-simple-search-dropdown';
    import axios from 'axios'
    export default{
    components: {
        Navbar,
        Dropdown
    },
    data(){
        return{
            categories: [],
            products: []
        }
    },
    created() {
                axios.get(`https://amiragroup.uz/api/categories/`).then((response) => {
                     this.categories = response.data
                    })
                    .catch((e) => {
                      console.error(e);
                    });
                    axios.get(`https://amiragroup.uz/api/products/`).then((response) => {
                     this.products = response.data
                    })
                    .catch((e) => {
                      console.error(e);
                    });
            },
            computed: {
                women(){
                    return this.products.filter((filtered) => {
                        return filtered.title_uz
                    })
                }
            }
    }
    </script>