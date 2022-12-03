<template>
  <div class="home">
    <Navbar @scrollto="goto" />
      <div class="main">
        <!-- Header -->
        <div class="main__header">
          <div class="main__header__text">
            <h1>
          <span> “Amira Textile” </span> <br> {{ $t('header__title')}}
            </h1>
            <!-- <router-link :to="{name: 'products'}"> -->
              <select v-on:change="changeRoute($event)" name="categories" id="#">
                <option value="Посмотреть продукты" disabled selected>{{ $t('show__products')}}</option>
                <option value="products/women">{{$t('productWomen')}}</option>
                <option value="products/men">{{$t('productMen')}}</option>
                <option value="products/kids">{{$t('productKids')}}</option>
                <option value="products/shoes">{{$t('productShoes')}}</option>
                <option value="products/hats">{{$t('productCaps')}}</option>
              </select>
          <!-- </router-link> -->
          </div>
        </div>
        <!-- About__company -->
        <div ref="proccess" class="main__company">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/9I02a1TPykI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div>
              <h1>{{$t('process')}}</h1>
            <p>{{$t('process__text')}}</p>
          </div>
        </div>
        <div ref="company" class="main__video">
          <div>
<h1>{{$t('company__title')}}<span>"Amira Textile"</span></h1>
<p>{{$t('In2022')}}</p>
<div class="benefits">
    <span>{{$t('product__1')}}</span>
    <span>{{$t('product__2')}}</span>
    <span>{{$t('product__3')}}</span>
    <span>{{$t('product__4')}}</span>
    <span>{{$t('product__5')}}</span>
    <span>{{$t('product__6')}}</span>
    <span>{{$t('product__7')}}</span>
    <span>{{$t('product__8')}}</span>
    <span>{{$t('product__9')}}</span>
    <span>{{$t('product__10')}}</span>
    <span>{{$t('product__11')}}</span>
    <span>{{$t('product__12')}}</span>
</div> 
<p>{{$t('natural')}}</p>        
</div>
<img src="../assets/images/amiran.jpg" alt="">
        </div>
        <!-- Slider -->
    <div ref="catalog" class="main__gallery">
<h1>{{$t('category')}}</h1>
<div>
<img @click="goKids" src="../assets/products/img4.jpg" alt="">
<img  @click="goKids" src="../assets/products/img5.jpg" alt="">
<img  @click="goKids" src="../assets/products/img6.jpg" alt="">
<img @click="goShoes" src="../assets/products/img7.jpg" alt="">
<img @click="goShoes" src="../assets/products/img8.jpg" alt="">
<img @click="goShoes" src="../assets/products/img12.jpg" alt="">
<img @click="goWomen" src="../assets/products/wom_3.jpg" alt="">
<img @click="goWomen" src="../assets/products/wom_6.jpg" alt="">
<img @click="goWomen" src="../assets/products/wom_5.jpg" alt="">
</div>
</div>

<!-- Statistic --> 

<div ref="ranking" class="main__statistic">
  <h1>{{$t('statistic')}}</h1>
  <div class="ranking">
  <div>
    <h2>300+</h2>
  <p>{{$t('workers')}}</p>
  </div>
  <div>
    <h2>6000+</h2>
    <p>{{$t('productDay')}}</p>
  </div>
  <div>
    <h2>1 800 000+</h2>
    <p>{{$t('productDay')}}</p>
  </div>
  <div>
  <h2>22 000 000$</h2>
  <p>{{$t('export')}}</p>
  </div>
  
  </div>
</div>

<!-- Our products -->



<!-- News -->

<div ref="news" class="main__news">
  <h1>{{$t('news')}}</h1>
  <div class="news">
    <div>
      <img src="../assets/products/president.jpg" alt="">
      <p>{{$t('news__1')}}</p>
    </div>
    <div>
      <img src="../assets/products/workers.jpg" alt="">
      <p>{{$t('news__2')}}</p>
    </div>
    <div>
      <img src="../assets/products/men_workers.jpg" alt="">
      <p>{{$t('news__3')}}</p>
    </div>
  </div>
</div>

<!-- Map -->

<div class="main__map">
  <h1>{{$t('geolocation')}}</h1>
  <div class="mapouter">
    <iframe src="https://yandex.uz/map-widget/v1/-/CCUbMGwUWC" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
  </div>
</div>

<!-- Footer -->
<div class="main__footer">
<div class="logo">
  <img src="../assets/images/amiran__logo.png" alt="">
  <h3>{{ $t('header__title')}}</h3>
</div>
<div class="line"></div>
<div class="address">
  <h2>{{$t('addressName')}}</h2>
  <div>
  <p>{{ $t('address')}}</p>
  </div>
</div>
<div class="line"></div>
<div class="contact">
  <h2>{{$t('contact')}}</h2>
  <div>
  <p>+998934820707</p>
  <p>+998996000555</p>
  <a href="https://mail.google.com/mail">
    <p>amiragroup.uz@gmail.com</p>
  </a>
  </div>
</div>
<div class="line"></div>
<div class="social">
  <h2>{{ $t('social')}}</h2>
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
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'
import axios from 'axios'
export default {
  name: 'HomeView',
  data(){
    return{
      categories: [],
      selected: 'Посмотреть продукты'
    }
  },
  components: {
    Navbar,
  },
  methods: {
    goWomen(){
this.$router.push('products/women')
    },
    goKids(){
this.$router.push('/products/kids')
    },
    goShoes(){
this.$router.push('/products/shoes')
    },
    changeRoute(e) {
    this.$router.push("/" + e.target.value);
  },
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
    clothes(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
  },
  mounted() {
            axios.get(`https://amiragroup.uz/api/categories/`).then((response) => {
                 this.categories = response.data
                 
                })
                .catch((e) => {
                  console.error(e);
                });
        },
 }
</script>
