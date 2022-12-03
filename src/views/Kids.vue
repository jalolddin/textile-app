<template>
    <div class="products">
    
    <div class="products__category"> 
      <div>
        <router-link :to="{name: 'home'}">
        <img src="../assets/icons/back.png" alt="">
        </router-link>
        <!-- <h1 v-for="title in categories" :key="title" v-show="title.title_ru == 'Детские одежды'">{{title.title_ru}}</h1> -->
        <h1 v-for="title in categories" :key="title" v-show="title.title_ru == 'Детские одежды' && lang === 'ru'">{{title.title_ru}}</h1>
    <h1 v-for="title in categories" :key="title" v-show="title.title_ru == 'Детские одежды' && lang === 'uz'">{{title.title_uz}}</h1>
    <h1 v-for="title in categories" :key="title" v-show="title.title_ru == 'Детские одежды' && lang === 'en'">{{title.title_en}}</h1>
      </div>
   
    </div>
    <div class="products__clothes">
        <div v-show="product.category_title_uz == 'Bolalar kiyimlari'" v-for="product in products" :key="product">
            <img :src="`${'https://amiragroup.uz/' + product.photo_link}`" alt="">
              <h3 v-if="lang === 'ru'">{{product.title_ru}}</h3>
        <h3 v-if="lang === 'uz'">{{product.title_uz}}</h3>
        <h3 v-if="lang === 'en'">{{product.title_en}}</h3>
        </div>
    </div>
    
    <!-- Footer -->
    
    <div class="main__footer">
<div class="logo">
  <img src="../assets/images/amiran__logo.png" alt="">
  <h3>сочетание стиля и комфорта</h3>
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
  <a href="https://mail.google.com/mail">
    <p>amiragroup.uz@gmail.com</p>
  </a>
  </div>
</div>
<div class="line"></div>
<div class="social">
  <h2>Социальные сеть</h2>
  <div>
    <a href="https://t.me/amiragroupuz">
      <img src="../assets/icons/telegram.svg" alt="">
    </a>
    <a href="https://www.instagram.com/amiragroup.uz/">
      <img src="../assets/icons/instagram.svg" alt="">
    </a>
    <a href="https://www.facebook.com/amiragroup.uz/">
      <img src="../assets/icons/facebook.svg" alt="">
    </a>
    <a href="https://www.youtube.com/channel/UCR2GxQbZ9QrHRMkvjkO_SxA">
      <img src="../assets/icons/youtube.svg" alt="">
    </a>
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
            products: [],
            lang: JSON.parse(localStorage.getItem('lang'))
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