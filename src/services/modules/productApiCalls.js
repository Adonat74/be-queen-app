import axios from "axios";

export async function getAllProductsByCategory(categoryId) {
  try {
    if (categoryId == 0) {
      
        const response = await axios.get('http://127.0.0.1:8000/api/product');
        return response.data.getProductWithCategory;
    } else {
        const response = await axios.get(`http://127.0.0.1:8000/api/product/categorie/${categoryId}`);
        return response.data.categoryIdWithProduct.product;
    }
  } catch (error) {
    console.error(error);
  }
}


export async function getOneProduct(categoryId) {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/product/${categoryId}`);
    return response.data.getProductById;
  } catch (error) {
    console.error(error);
  }
}
