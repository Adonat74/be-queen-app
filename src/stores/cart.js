import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const cart = ref([]);
  const cartValue = computed(() => cart);

  function addProduct(productId) {
    cart.value.push(productId);
    console.log(cart);
  }

  function removeProduct(productIndex) {
    cart.value.splice(productIndex, 1);
    console.log(cart);
  }

  // gère si le panier doit etre affiché ou pas
  const isDisplayed = ref(false);
  const isDisplayedValue = computed(() => isDisplayed);

  function toggleIsDisplayed() {
    isDisplayed.value = !isDisplayed.value;
  }

  return { cart, cartValue, addProduct, removeProduct, isDisplayed, isDisplayedValue, toggleIsDisplayed }
});
