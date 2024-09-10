<script setup>
import Register from '@/components/account/Register.vue';
import Login from '@/components/account/Login.vue';
import AccountInfo from '@/components/account/AccountInfo.vue';

import { onMounted } from 'vue';
import { useAccountStore } from '@/stores/account';


const store = useAccountStore();


onMounted(() => {
  store.initConnectionState();
});

</script>

<template>
    <AccountInfo v-if="store.isConnected"/>

    <div v-else class="formContainer">
        <Register v-if="store.isDisplayed" />
        <Login v-if="!store.isDisplayed" />
    </div>

    
</template>

<style scoped>

.formContainer{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }
</style>
