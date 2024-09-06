<script setup>
import Register from '@/components/account/Register.vue';
import Login from '@/components/account/Login.vue';

import { useAccountStore } from '@/stores/account';


const store = useAccountStore();
</script>

<template>
    <Register v-if="store.isDisplayed" />
    <Login v-if="!store.isDisplayed" />
</template>

<style scoped>
    

</style>
