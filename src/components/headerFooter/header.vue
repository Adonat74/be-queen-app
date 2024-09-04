<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
  <header>
    <img alt="be Queen logo" class="logo" src="@/assets/images/logo.png" width="150" height="150" />
    <nav>
      <RouterLink to="/">ACCUEIL</RouterLink>
      <RouterLink to="/catalog">CATALOGUE</RouterLink>
      <a href="">PERSONALISATION</a>
      <a href="">CONTACT</a>
      <a href=""><img src="../../assets/icons/cart2.svg" alt="cart icon" width="30" height="30" /></a>
      <a href=""
        ><img src="../../assets/icons/account.svg" alt="account icon" width="30" height="30"
      /></a>
    </nav>
  </header>
</template>

<style scoped>
    header {
    background-color: var(--green);
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
</style>
