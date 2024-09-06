import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAccountStore = defineStore('account', () => {

  const isDisplayed = ref(false);
  const isDisplayedValue = computed(() => isDisplayed);

  function toggleIsDisplayed() {
    isDisplayed.value = !isDisplayed.value;
  }

  

  return { isDisplayed, isDisplayedValue, toggleIsDisplayed }
});
