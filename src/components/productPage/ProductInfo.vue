<script setup>
import { useCartStore } from '@/stores/cart';
defineProps(['product'])

const store = useCartStore();
</script>

<template>
    <div class="productInfo">
        <h1>{{ product.name }}</h1>
        <p>{{ product.description }}</p>
        <div class="productPageButtons">
            <div class="colorInfo">
                <div>
                    <button class="colorButton buttonRed"></button><button class="colorButton buttonOrange "></button><button class="colorButton buttonYellow "></button><button class="colorButton buttonGreen "></button><button class="colorButton buttonBlue "></button><button class="colorButton buttonViolet "></button>
                </div>
                <button @click="store.addProduct(product.id)">Ajouter au panier</button>
            </div>
            <div class="priceInfo">
                <p>{{ product.price/100 }}$</p>
                <p class="enStockYellow">en stock</p>
                <button>Personalisation</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    /* productInfo Component */
    .productInfo{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 100%;
    }

    .productInfo>p{
        width: 80%;
        text-align: center;
    }

    .productInfo p{
        font-weight: 600;
    }

    .enStockYellow{
        color: rgb(219, 201, 0);
    }

    .productPageButtons{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .colorInfo>button {
        margin-top: 50px;
        color: white;
        padding: 3px 10px;
        background-color: var(--green);
        border-radius: 12px;
        border: 2px solid var(--green);
        font-size: 1.2rem;
    }

    .priceInfo>button{
        background-color: rgb(209, 208, 208);
        border-radius: 12px;
        border: 2px solid var(--green);
        font-size: 1.2rem;
        padding: 3px 10px;
    }

    .priceInfo{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
        height: 100%;
    }

    .colorButton{
        width: 20px;
        height: 20px;
        border: none;
        border-radius: 15px;
        margin-right: 5px;
    }
    .buttonRed{
        background-color: red;
    }
    .buttonOrange{
        background-color: Orange;
    }
    .buttonYellow{
        background-color: Yellow;
    }
    .buttonGreen{
        background-color: green;
    }
    .buttonBlue{
        background-color: Blue;
    }
    .buttonViolet{
        background-color: rgb(182, 79, 255);
    }

</style>
