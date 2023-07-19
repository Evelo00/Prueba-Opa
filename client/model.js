import knapsack from "./knapsack.js";
const backendBaseUrl = "http://localhost:3001";

const ProductModel = {
  async getAllProducts() {
    try {
      const response = await axios.get(`${backendBaseUrl}`);
      return response.data;
    } catch (error) {
      throw new Error("Error al obtener los productos");
    }
  },

  async createProduct(newProduct) {
    try {
      const response = await axios.post(`${backendBaseUrl}`, newProduct);
      return response.data;
    } catch (error) {
      throw new Error("Error al crear el producto");
    }
  },

  async deleteProduct(id) {
    try {
      const response = await axios.delete(`${backendBaseUrl}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Error al eliminar el producto");
    }
  },

  async editProduct(editedProduct) {
    try {
      const response = await axios.put(
        `${backendBaseUrl}/${editedProduct.id}`,
        editedProduct
      );
      return response.data;
    } catch (error) {
      throw new Error("Error al editar el producto");
    }
  },

  calculateOptimalElements(products, minCalories, maxWeight) {
    const eligibleProducts = products.filter(
      (product) => product.calorias >= minCalories
    );
    const { items, maxValue } = knapsack(eligibleProducts, maxWeight);

    return {
      optimalItems: items,
      totalCalories: maxValue,
    };
  },
};

export default ProductModel;
