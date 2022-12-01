<template>
  <div class="home">
    <Navbar @scrollto="goto" />
      <div class="main">
        <!-- Header -->
        <div class="main__header">
          <div class="main__header__text">
            <h1>
          <span> “Amira Textile” </span> - сочетание стиля и комфорта 
            </h1>
            <!-- <router-link :to="{name: 'products'}"> -->
              <select v-on:change="changeRoute($event)" name="categories" id="#">
                <option value="Посмотреть продукты" disabled selected>Просмотреть продукты</option>
                <option value="products/women">Женские одежды</option>
                  <option value="products/men">Мужские одежды</option>
                  <option value="products/kids">Детские одежды</option>
                  <option value="products/shoes">Обуви</option>
                  <option value="products/hats">Головные уборы</option>
              </select>
          <!-- </router-link> -->
          </div>
        </div>
        <!-- About__company -->
        <div ref="proccess" class="main__company">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/9I02a1TPykI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div>
              <h1>Процесс производствa</h1>
            <p>Трикотажная фабрика <span> “Amira Textile” </span> произоводит комфортную и стильную одежду для взрослых и детей.
            Мы создаём одежду от пряжи до готового изделия. Производимая пряжа наполовину состоит из местного сырья и наполовину из
            китайского и турецкого.</p>
          </div>
        </div>
        <div ref="company" class="main__video">
          <div>
<h1>Kompany <span>"Amira Textile" </span></h1>
<p>Наша компания производит различные трикотажные изделия с мая 2022года.</p>
<div class="benefits">
    <span>Рубашки поло</span>
    <span>Мужские джемперы</span>
    <span>Мужские свитера</span>
    <span>Мужская обувь</span>
    <span>Женские трикотажные костюмы</span>
    <span>Женские платья</span>
    <span>Женская обувь</span>
    <span>Женские кофты</span>
    <span>Женские кардиганы</span>
    <span>Одежда для мальчиков</span>
    <span>Одежда для девочек</span>
    <span>Головные уборы</span>
</div> 
<p>Натуральные волокна обеспечивают комфорт и экологичность при носке.
Высокотехнологичное оборудование позволяет производить трикотажные изделия любой сложности. Система контроля качества
гарантирует производство качественной продукции.</p>        
</div>
<img src="../assets/images/amiran.jpg" alt="">
        </div>
        <!-- Slider -->
    <div ref="catalog" class="main__gallery">
<h1>Категория товаров</h1>
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
  <h1>Наши показатели</h1>
  <div class="ranking">
  <div>
    <h2>300+</h2>
  <p>сотрудников</p>
  </div>
  <div>
    <h2>6000+</h2>
    <p>изделий в день</p>
  </div>
  <div>
    <h2>1 800 000+</h2>
    <p>изделий в год</p>
  </div>
  <div>
  <h2>22 000 000$</h2>
  <p>экспорт</p>
  </div>
  
  </div>
</div>

<!-- Our products -->



<!-- News -->

<div ref="news" class="main__news">
  <h1>Новости</h1>
  <div class="news">
    <div>
      <img src="../assets/products/president.jpg" alt="">
      <p>Визит Президента в <span>“Amira Textile”</span> 12.05.2022</p>
    </div>
    <div>
      <img src="../assets/products/workers.jpg" alt="">
      <p>В 2022 году количество работников увеличено в два раза</p>
    </div>
    <div>
      <img src="../assets/products/men_workers.jpg" alt="">
      <p>Налажена линия по производству обуви</p>
    </div>
  </div>
</div>

<!-- Map -->

<div class="main__map">
  <h1>Наша геолокация</h1>
  <div class="mapouter">
    <iframe src="https://yandex.uz/map-widget/v1/-/CCUbMGwUWC" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
  </div>
</div>

<!-- Footer -->
<div class="main__footer">
<div class="logo">
  <img src="../assets/images/amiran__logo.png" alt="">
  <h3>Сочетание стиля и комфорта</h3>
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
  <h2>Мы в социальных сетях</h2>
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
  created() {
            axios.get(`https://amiragroup.uz/api/categories/`).then((response) => {
                 this.categories = response.data
                 
                })
                .catch((e) => {
                  console.error(e);
                });
        },
 }
</script>
