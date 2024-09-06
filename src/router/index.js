import { createWebHistory, createRouter } from 'vue-router'
import HomePage from '@/views/HomePage.vue';
import Catalog from '@/views/Catalog.vue';
import ProductPage from '@/views/ProductPage.vue';
import Account from '@/views/Account.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', name:"home" ,component: HomePage},
        {path: '/catalog', name:"catalog" ,component: Catalog},
        {path: '/product/:id', name:"product" ,component: ProductPage},
        {path: '/account', name:"account" ,component: Account},
    ]
});

export default router;
