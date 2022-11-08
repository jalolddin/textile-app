<template>
  <div class="home">
    <Navbar @scrollto="goto" />
      <div class="main">
        <!-- Header -->
        <div class="main__header">
          <div v-motion-fade-visible :delay="200" class="main__header__text">
            <h1>
          <span> “Amira Textile” </span> - <br> сочетание стиля <br> и комфорта 
            </h1>
            <button @click="clothes('clothes')">Просмотреть продукты</button>
          </div>
        </div>
        <!-- About__company -->
        <div ref="proccess" class="main__company">
    <video controls ref="videoRef">
      <source autostart="false" type="video/mp4" src="../assets/images/company__video.mp4" />
    </video>
          <div>
              <h1>Процесс производство</h1>
            <p>Трикотажная фабрика <span> “Amira Textile” </span> произоводит комфортную и стильную одежду для взрослых и детей.
            Мы создаём одежду от пряжи до готового изделия. Производимая пряжа наполовину состоит из местного сырья и наполовину из
            китайского и турецкого.</p>
          </div>
        </div>
        <div ref="company" class="main__video">
          <div>
<h1>Kompany <span>"Amira Textile" </span></h1>
<p>Наша компания производит различные трикотажную продукцию с мая 2022года.</p>
<div class="benefits">
  <div>
    <span>Рубашки поло</span>
    <span>Мужские джемперы</span>
    <span>Мужские свитера</span>
    <span>Мужская обувь</span>
  </div>
  <div>
    <span>Женские трикотажные костюмы</span>
    <span>Женские платья</span>
    <span>Женская обувь</span>
  </div>
    <div>
      <span>Одежда для мальчиков</span>
      <span>Одежда для девочек</span>
      <span>Головные уборы</span>
    </div>
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
<img src="../assets/products/img4.jpg" alt="">
<img src="../assets/products/img5.jpg" alt="">
<img src="../assets/products/img6.jpg" alt="">
<img src="../assets/products/img7.jpg" alt="">
<img src="../assets/products/img8.jpg" alt="">
<img src="../assets/products/img12.jpg" alt="">
<img src="../assets/products/img10.jpg" alt="">
<img src="../assets/products/img11.jpg" alt="">
<img src="../assets/products/img13.jpg" alt="">
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

<div ref="clothes" class="main__products">
  <h1>Наши продукты</h1>
  <div>
    <img src="../assets/products/women_1.jpg" alt="">
    <img src="../assets/products/women_2.jpg" alt="">
    <img src="../assets/products/women_3.jpg" alt="">
    <img src="../assets/products/women_4.jpg" alt="">
    <img src="../assets/products/women_5.jpg" alt="">
    <img src="../assets/products/women_6.jpg" alt="">
    <img src="../assets/products/women_7.jpg" alt="">
    <img src="../assets/products/women_8.jpg" alt="">
  </div>
</div>

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
    <div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=fergana beshaliq&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </div>
  </div>
</div>

<!-- Footer -->
<div class="main__footer">
<div class="logo">
  <img src="../assets/images/amiran__logo.png" alt="">
  <h3> - сочетание стиля <br> и комфорта</h3>
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
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'

import 'swiper/css'
import 'swiper/css/pagination'
export default {
  name: 'HomeView',
  components: {
    Navbar,
  },
  methods: {
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

 }
</script>
