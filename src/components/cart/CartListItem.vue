<script setup>
import { ref, onMounted } from 'vue';
import { getOneProduct } from '../../services/modules/productApiCalls';


import { useCartStore } from '@/stores/cart';


const store = useCartStore();

const product = ref({})

const props = defineProps({
  id: {
    type: Number
  },
  index: {
    type: Number
  }
});

onMounted(async () => {
    const result = await getOneProduct(props.id);
    if (result) {
        product.value = result;
    }
});
</script>

<template>
    <img src="../../assets/images/bikle-modele-R-2024-2-1024x545-2.png" alt="vélo" width="250px">                    
    <div class="cartItemText">
        <h3>{{ product.name }}</h3>
        <p>Customisé</p>
        <p class="custom">modifications ></p>
        <p>{{ product.price/100 }}$</p>
    </div>
    <div class="buttonDiv" @click="store.removeProduct(props.index)">
        <button class="closeButton"><img src="../../assets/icons/cross.svg" alt="cross icon" height="30px" width="30px"></button>
    </div>
</template>

<style scoped>
    h3{
        font-size: 1.8rem;
        font-weight: 300;
        text-decoration: underline 1px;
        text-underline-offset: 12px;
    }
    .cartItemText{
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
    }

    .custom{
        color: var(--yellow);
        text-shadow: 1px 1px rgba(0, 0, 0, 0.212);
    }
    .closeButton{
        background-color: transparent;
        border: none;
    }
    .buttonDiv{
        height: 100%;
    }
</style>
