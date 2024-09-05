<script setup>
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/cart';


const store = useCartStore();

</script>

<template>
  <header>
    <img alt="be Queen logo" class="logo" src="@/assets/images/logo.png" width="150" height="150" />
    <nav>
      <RouterLink to="/">ACCUEIL</RouterLink>
      <RouterLink to="/catalog">CATALOGUE</RouterLink>
      <div>PERSONALISATION</div>
      <div>CONTACT</div>
      <button @click="store.toggleIsDisplayed()"><img src="../../assets/icons/cart2.svg" alt="cart icon" width="30" height="30" /></button>
      <button><img src="../../assets/icons/account.svg" alt="account icon" width="30" height="30"
      /></button>
    </nav>
  </header>
</template>

<style scoped>
  header {
    color: var(--white);
    background-color: var(--green);
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 10000;
  }

  .logo {
    position: relative;
    left: 20px;
    top: 30px;
    z-index: 1000;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.15rem;
    font-weight: 500;
    width: 650px;
    margin-right: 20px;
  }

  button{
    background-color: transparent;
    border: none;
  }
</style>
