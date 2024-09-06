<script setup>
import { useAccountStore } from '@/stores/account';


const store = useAccountStore();

defineProps({
  buttonText: String
})
</script>

<template>
    <button class="toggleAccountButton" @click="store.toggleIsDisplayed()">{{ buttonText }}</button>
</template>

<style scoped>

    .toggleAccountButton{
        background-color: var(--yellow);
        color: var(--green);
        border: 2px solid var(--green);
        border-radius: 15px;
        font-size: 1.2rem;
        font-weight: 600;
        padding: 8px 15px;
        position: absolute;
        right: -200px;
        bottom: 0px;
    }
</style>
