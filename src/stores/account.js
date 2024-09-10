import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAccountStore = defineStore('account', () => {

  const isConnected = ref(false);

  function login (response) {
    localStorage.setItem('userInfo', JSON.stringify({
      token: response.data.access_token,
      id: response.data['0'].id
    }));
    isConnected.value = true;
  }

  const logout = () => {
    localStorage.removeItem('userInfo');
    isConnected.value = false;  // Update reactive state
  };


  const initConnectionState = () => {
    const userInfo = localStorage.getItem('userInfo');
    isConnected.value = userInfo;
  };




  ///////////////////toggle components
  const isDisplayed = ref(false);
  const isDisplayedValue = computed(() => isDisplayed);

  function toggleIsDisplayed() {
    isDisplayed.value = !isDisplayed.value;
  }

  

  return { isDisplayed, isDisplayedValue, toggleIsDisplayed, isConnected, login, logout, initConnectionState }
});
