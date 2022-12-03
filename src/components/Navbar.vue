<template>
    <div class="navbar">
        <!-- Logo -->
<router-link :to="{name: 'home'}">
    <img class="navbar__logo" src="../assets/images/amiran__logo.png" alt="Logo" />
</router-link>
            

        <!-- Navbar Links -->

        <ul class="navbar__links">
            <li @click="proccess">{{ $t('process')}}</li>
            <li @click="company">{{ $t('company')}}</li>
            <li @click="ranking">{{ $t('statistic')}}</li>
            <li @click="news">{{ $t('news')}}</li>
        </ul>

        <!-- Address -->
      
        <div class="navbar__address">
            <div>
                <img src="../assets/icons/map.svg" alt="geolocation" />
                <p>{{ $t('address')}}</p>
            </div>
            <div>
                <img src="../assets/icons/call_phone.svg" alt="" />
                <p>+998904070707 <br>
                +998934820707 <br>
            </p>
            </div>
        </div>
<select @change="updateLanguage()" v-model="langInfo" class="langSelect">
<option  value="ru">ru</option>
<option value="uz">uz</option>
<option value="en">en</option>    
</select>
    </div>
</template>

<script>
export default {
    data(){
return{
    langInfo: JSON.parse(localStorage.getItem('lang')),
}
    },
    methods: {
        updateLanguage() {
     localStorage.setItem("lang", JSON.stringify(this.langInfo));
    },
        ranking() {
            this.$emit("scrollto", 'ranking')
        },
        company() {
            this.$emit("scrollto", 'company')
        },
        catalog() {
            this.$emit("scrollto", 'catalog')
        },
        proccess() {
            this.$emit("scrollto", 'proccess')
        },
        clothes() {
            this.$emit("scrollto", 'clothes')
        },
          news() {
              this.$emit("scrollto", 'news')
        }
},
mounted(){
    if (localStorage.getItem("lang")) {
      this.langInfo = JSON.parse(localStorage.getItem('lang'));
    } else {
      this.langInfo = 'ru'
    }
},
updated(){
    localStorage.setItem('lang', JSON.stringify(this.langInfo))
 window.location.reload()
}
};
</script>

<style>

</style>
