import axios from "axios";

export async function postOrder() {
    console.log(JSON.parse(localStorage.getItem('userInfo')))
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/order`, 
        {
            status: "pending",
            user_id: userInfo.id
        }, 
        { 
            headers:{
                "Authorization": `Bearer ${userInfo.token}`
            } 
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
}

