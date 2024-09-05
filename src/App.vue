<script setup>
import Header from './components/headerFooter/header.vue';
import Footer from './components/headerFooter/footer.vue';
import Cart from './components/cart/Cart.vue';
import { RouterView } from 'vue-router'
import { useCartStore } from '@/stores/cart';


const store = useCartStore();
</script>

<template>
  <Header />
  <main>
    <Cart v-if="store.isDisplayed"/>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
  main{
    position: relative;
  }
</style>
