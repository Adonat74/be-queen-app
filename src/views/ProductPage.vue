<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue';
import { getOneProduct } from '../services/modules/productApiCalls';
import ProductInfo from '@/components/productPage/ProductInfo.vue';
import ProductImage from '@/components/productPage/ProductImage.vue';

const route = useRoute()

const product = ref({})

onMounted(async () => {
    const result = await getOneProduct(route.params.id);
    if (result) {
        product.value = result;
    }
});
</script>

<template>
    <div class="productPage">
        <section class="product">
            <ProductImage />
            <ProductInfo  :product="product"/>
        </section>
        <section>
             
        </section>
        <section>

        </section>
    </div>
</template>

<style scoped>
    .productPage{
        padding: 80px 60px;
    }

    .product{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 50px;
        height: 300px;
    }
</style>
