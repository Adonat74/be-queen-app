<script setup>
import ProductCard from '@/components/ProductCard.vue';
import ProductListFilter from '@/components/ProductListFilter.vue';
import { ref, onMounted } from 'vue';
import { getAllProductsByCategory } from '../services/modules/productApiCalls';

const products = ref([]);
const category = ref(0);

onMounted(async () => {
    const result = await getAllProductsByCategory(category.value);
    if (result) {
        products.value = result;
    }
});

async function getProductsByCategory(selectedCategory) {
    category.value = selectedCategory;
    const result = await getAllProductsByCategory(selectedCategory);
    if (result) {
        products.value = result;
    }
}
</script>



<template>
    <section class="catalogHeader">
        <img src="../assets/images/bike-1505039_1280 1.png" alt="vélo devant un mur de pierre">
        <h1>Nos vélos</h1>
    </section>
    <div>
        <ProductListFilter @change-event="getProductsByCategory"/>
    </div>

    <section class="productList">
        <RouterLink to="/product" class="productCard" v-for="product in products" :key="product.id">
            <ProductCard :product="product" />
        </RouterLink>
    </section>
</template>



<style scoped>
    .catalogHeader{
        width: 100%;
        position: relative;
    }
    h1{
        font-size: 5rem;
        color: var(--yellow);
        font-weight: 400;
        position: absolute;
        left: 20px;
        bottom: 0px;
    }
    .catalogHeader>img{
        object-fit: cover;
        width: 100%;
        height: 450px;
    }

    .productList{
        padding: 70px 0;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
    }

    .productCard {
        background-color: var(--green);
        padding: 10px 20px;
        width: 330px;
        border-radius: 15px;
        box-shadow: 5px 5px 10px 4px rgba(0,0,0,0.2);
    }
</style>
