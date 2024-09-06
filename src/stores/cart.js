import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const cart = ref(JSON.parse(localStorage.getItem('cart')) || []);
  const cartValue = computed(() => cart);


  function addProduct(productId) {
    cart.value.push(productId);

    localStorage.setItem('cart', JSON.stringify(cart.value));
    console.log(JSON.parse(localStorage.getItem('cart')));
  }


  function removeProduct(productIndex) {
    cart.value.splice(productIndex, 1);
    localStorage.setItem('cart', JSON.stringify(cart.value));
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
