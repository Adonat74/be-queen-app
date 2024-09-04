import { createWebHistory, createRouter } from 'vue-router'
import HomePage from '@/views/HomePage.vue';
import Catalog from '@/views/Catalog.vue';
import ProductPage from '@/views/ProductPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', name:"home" ,component: HomePage},
        {path: '/catalog', name:"catalog" ,component: Catalog},
        {path: '/product', name:"product" ,component: ProductPage},
    ]
});

export default router;
