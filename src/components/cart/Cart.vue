<script setup>
import { useCartStore } from '@/stores/cart';


const store = useCartStore();
</script>

<template>
    <div class="cartContainer">
        <div></div>
        <section class="cart">
            <button></button>
            <h2>VOTRE PANIER</h2>
            <div class="productList">
                
            </div>
            <button>Valider mon panier</button>
        </section>
    </div>
</template>

<style scoped>
    .cartContainer{
        display: grid;
        grid-template-columns: 1fr 1fr;
        z-index: 10;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.261);
    }

    .cart{
        background-color: var(--white);
    }

    .productList{
        height: 80%;
    }

</style>
