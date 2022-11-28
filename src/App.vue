<template>
<div>

  <router-view />

</div>
</template>

<script>
// @ is an alias to /src
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'HomeView',
  components: {
    Navbar,
    Footer
  },
  methods: {
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
  
  },

 }
</script>

