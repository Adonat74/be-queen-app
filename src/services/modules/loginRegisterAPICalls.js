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

      localStorage.setItem('userInfo', JSON.stringify({
        token: response.data.access_token,
        id: response.data['0'].id
      }));

      console.log(response)
      console.log(response.data['0'].id)
      console.log(response.data.access_token);
    } catch (error) {
      console.error(error);
    }
}