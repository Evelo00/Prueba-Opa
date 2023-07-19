import ProductModel from "./model.js";
import ProductView from "./view.js";

const ProductController = {
  products: [], // Inicializar this.products como un array vacío

  async init() {
    try {
      const products = await ProductModel.getAllProducts();
      this.products = products; // Asignar los productos obtenidos a this.products
      ProductView.renderProducts(products);
      this.updateTotalAndOptimal(); // Calcular conjunto óptimo y actualizar el total
    } catch (error) {
      console.error(error.message);
    }

    const productForm = document.getElementById("productForm");
    productForm.addEventListener("submit", this.handleFormSubmit.bind(this));
  },

  async handleFormSubmit(event) {
    event.preventDefault();
    const pesoInput = parseFloat(document.getElementById("pesoInput").value);
    const caloriasInput = parseFloat(
      document.getElementById("caloriasInput").value
    );

    if (isNaN(pesoInput) || isNaN(caloriasInput)) {
      console.error("Por favor, completa todos los campos.");
      return;
    }

    const newProduct = {
      peso: pesoInput,
      calorias: caloriasInput,
    };

    try {
      await ProductModel.createProduct(newProduct);
      ProductView.clearInputs();
      this.loadProducts();
    } catch (error) {
      console.error(error.message);
    }
  },

  async deleteProduct(id) {
    try {
      await ProductModel.deleteProduct(id);
      this.loadProducts();
    } catch (error) {
      console.error(error.message);
    }
  },

  async editProduct(id, peso, calorias) {
    const editedProduct = {
      id,
      peso,
      calorias,
    };

    try {
      await ProductModel.editProduct(editedProduct);
      this.loadProducts();
    } catch (error) {
      console.error(error.message);
    }
  },

  async loadProducts() {
    try {
      const products = await ProductModel.getAllProducts();
      this.products = products;
      ProductView.renderProducts(products);
      this.updateTotalAndOptimal();
    } catch (error) {
      console.error(error.message);
    }
  },

  updateTotalAndOptimal() {
    const minCalories = 500; // Valor mínimo de calorías para el conjunto óptimo
    const maxWeight = 15; // Peso máximo permitido

    const { optimalItems, totalCalories } =
      ProductModel.calculateOptimalElements(
        this.products,
        minCalories,
        maxWeight
      );

    ProductView.renderOptimalElements(optimalItems, totalCalories);
  },
};

export default ProductController;
