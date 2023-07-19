import knapsack from "./knapsack.js";
// URL base del backend para realizar peticiones HTTP
const backendBaseUrl = "http://localhost:3001";

const ProductModel = {
  // Función para obtener todos los productos desde el backend
  async getAllProducts() {
    try {
      // Realiza una petición GET al backend para obtener todos los productos
      const response = await axios.get(`${backendBaseUrl}`);
      return response.data; // Retorna los datos recibidos desde el backend
    } catch (error) {
      throw new Error("Error al obtener los productos");
    }
  },

  // Función para crear un nuevo producto en el backend
  async createProduct(newProduct) {
    try {
      // Realiza una petición POST al backend para crear un nuevo producto con los datos proporcionados
      const response = await axios.post(`${backendBaseUrl}`, newProduct);
      return response.data; // Retorna los datos del nuevo producto creado desde el backend
    } catch (error) {
      throw new Error("Error al crear el producto");
    }
  },

  // Función para eliminar un producto desde el backend mediante su ID
  async deleteProduct(id) {
    try {
      // Realiza una petición DELETE al backend para eliminar el producto con el ID proporcionado
      const response = await axios.delete(`${backendBaseUrl}/${id}`);
      return response.data; // Retorna los datos del producto eliminado desde el backend
    } catch (error) {
      throw new Error("Error al eliminar el producto");
    }
  },

  // Función para editar un producto en el backend
  async editProduct(editedProduct) {
    try {
      // Realiza una petición PUT al backend para editar el producto con los datos proporcionados
      const response = await axios.put(
        `${backendBaseUrl}/${editedProduct.id}`,
        editedProduct
      );
      return response.data; // Retorna los datos del producto editado desde el backend
    } catch (error) {
      throw new Error("Error al editar el producto");
    }
  },

  // Función para calcular los elementos óptimos que cumplen con ciertos criterios utilizando el módulo knapsack
  calculateOptimalElements(products, minCalories, maxWeight) {
    // Filtra los productos elegibles que cumplen con el requisito de calorías mínimas
    const eligibleProducts = products.filter(
      (product) => product.calorias >= minCalories
    );
    // Utiliza la función knapsack para obtener el conjunto óptimo de elementos que cumple con la capacidad máxima de peso
    const { items, maxValue } = knapsack(eligibleProducts, maxWeight);

    return {
      optimalItems: items, // Retorna el conjunto óptimo de elementos
      totalCalories: maxValue, // Retorna el valor total de calorías en el conjunto óptimo
    };
  },
};

export default ProductModel;
