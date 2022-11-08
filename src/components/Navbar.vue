<template>
    <div class="navbar">
        <!-- Logo -->

        <img class="navbar__logo" src="../assets/images/amiran__logo.png" alt="Logo" />

        <!-- Navbar Catalog -->

        <div @click="catalog" class="navbar__catalog">
            <img src="../assets/icons/dropdown.png" alt="" />
            <h2>Категория</h2>
        </div>

        <!-- Navbar Links -->

        <ul class="navbar__links">
            <li @click="proccess">Процесс производство</li>
            <li @click="company">О компании</li>
            <li @click="ranking">Наши показатели</li>
            <li @click="news">Новости</li>
        </ul>

        <!-- Address -->
        <div class="navbar__address">
            <div>
                <img src="../assets/icons/map.svg" alt="geolocation" />
                <p>Ферганская область, Ташлакский район <br> ул.Мухандис - 214 дом</p>
            </div>
            <div>
                <img src="../assets/icons/call_phone.svg" alt="" />
                <p>+998904070707 <br>
                +998934820707</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
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
}
};
</script>

<style>

</style>
