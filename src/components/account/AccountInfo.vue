<script setup>
import { useAccountStore } from '@/stores/account';


const store = useAccountStore();



</script>

<template>
    <div class="formContainer">
        <section>
            <h1>Info de compte</h1>
            <button @click="store.logout()">Se déconnecter</button>
        </section>
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
    section{
        background-color: var(--black);
        display: flex;
        flex-direction: column;
        padding: 30px 30px;
        border-radius: 20px;
        position: relative;
    }
    h1{
        text-align: center;
        font-weight: 500;
    }
</style>
