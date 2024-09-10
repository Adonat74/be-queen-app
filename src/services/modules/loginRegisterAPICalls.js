import axios from "axios";
import { useAccountStore } from '@/stores/account';
import { getActivePinia, setActivePinia } from 'pinia';
import { pinia } from '@/main';  // Import Pinia instance





export async function registerUser(userData) {

    // console.log(userData)
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/register`, userData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
}

export async function loginUser(userData) {

    if (!getActivePinia()) {
      setActivePinia(pinia);  // Set the active Pinia instance
    }
    const store = useAccountStore();

    // console.log(userData)
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/login`, userData);

      store.login(response);

      console.log(response)
      console.log(response.data['0'].id)
      console.log(response.data.access_token);
    } catch (error) {
      console.error(error);
    }
}