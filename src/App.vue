<script setup>
import Header from './components/headerFooter/header.vue';
import Footer from './components/headerFooter/footer.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
  

  




</style>
