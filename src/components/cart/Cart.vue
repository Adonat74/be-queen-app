<script setup>
import CartListItem from './CartListItem.vue';
import { useCartStore } from '@/stores/cart';


const store = useCartStore();
</script>

<template>
    <div class="cartContainer">
        <div @click="store.toggleIsDisplayed()"></div>

        <section class="cart">
            <button class="closeButton cartCloseButton" @click="store.toggleIsDisplayed()"><img src="../../assets/icons/cross.svg" alt="cross icon" height="50px" width="50px"></button>
            <h2>VOTRE PANIER</h2>
            <div class="productList">
                <section class="cartItem" v-for="id in store.cart" :key="id">
                    <CartListItem :id="id"/>
                </section>
            </div>
            <button class="validateCart">Valider mon panier</button>
        </section>
    </div>
</template>

<style scoped>
    .cartContainer{
        display: grid;
        grid-template-columns: 1fr 600px;
        z-index: 10;
        position: absolute;
        width: 100%;
        height: calc(100vh - 100px);
        background-color: rgba(0, 0, 0, 0.261);
        position: fixed;
    }
    .cart{
        background-color: var(--white);
        height: 100%;
        padding-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    .cartCloseButton{
        position: absolute;
        top: 10px;
        right: 20px;
    }
    h2{
        font-size: 1.9rem;
        font-weight: 300;
        margin-bottom: 10px;
    }
    .productList{
        height: calc(100vh - 300px);
        border-top: 2px solid var(--black);
        border-bottom: 2px solid var(--black);
        width: 85%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: scroll;

        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    .productList::-webkit-scrollbar {
        display: none;
    }

    .validateCart{
        margin-top: 20px;
        font-size: 1.4rem;
        font-weight: 600;
        color: white;
        background-color: var(--green);
        border: none;
        border-radius: 11px;
        padding: 15px 20px;
    }
    .closeButton{
        background-color: transparent;
        border: none;
    }

    /* cart item */
    .cartItem{
        width: 85%;
        display: flex;
        padding: 20px 0;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid var(--black);
    }

</style>
