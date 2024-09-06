import axios from "axios";

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
    // console.log(userData)
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/login`, userData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
}