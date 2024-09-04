<script setup>
defineProps(['product'])
</script>

<template>
    <div class="cardTitle">
      <h3>{{ product.name }}</h3>
      <p>{{ product.price / 100 }} $</p>
    </div>
    <p>{{ product.description }}</p>
    <img
      src="../assets/images/bikle-modele-R-2024-2-1024x545-2.png"
      alt="bike image"
      height="150px"
    />
    <div class="cardButtons">
      <button class="addToCartButton">AJOUT PANIER</button>
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
