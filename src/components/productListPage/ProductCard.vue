<script setup>
import { useCartStore } from '@/stores/cart';
import { RouterLink } from 'vue-router';
defineProps(['product'])

const store = useCartStore();

</script>
 
<template>
  <RouterLink :to="`/product/${product.id}`">
    <div class="cardTitle">
      <h3>{{ product.name }}</h3>
      <p>{{ product.price / 100 }} $</p>
    </div>
    <p class="description">{{ product.description }}</p>
    <img
      src="../../assets/images/bikle-modele-R-2024-2-1024x545-2.png"
      alt="bike image"
      height="150px"
    />
  </RouterLink>
    
    <div class="cardButtons">
      <button class="addToCartButton" @click="store.addProduct(product.id)">AJOUT PANIER</button>
      <button class="personalizeButton">PERSONALISER</button>
    </div>
</template>

<style scoped>

.cardTitle,
.cardButtons {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cardTitle{
    color: var(--yellow);
    font-size: 1.2rem;
    font-weight: 600;
}

.description {
    color: black;
}

.cardButtons button{
    padding: 8px 12px;
    margin-top: 10px;
    font-size: 0.9rem;
    border: none;
    border-radius: 5px;
    box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.2);
}

.addToCartButton{
    background-color: var(--yellow);
}
.personalizeButton{
    background-color: var(--black);
    color: var(--white);
}
</style>
