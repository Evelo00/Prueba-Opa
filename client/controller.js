import ProductModel from "./model.js";
import ProductView from "./view.js";

const ProductController = {
  products: [], // Inicializar this.products como un array vacío

  // Función "init" para inicializar el controlador y cargar los productos iniciales
  async init() {
    try {
      // Obtiene todos los productos desde el backend utilizando el modelo ProductModel
      const products = await ProductModel.getAllProducts();
      this.products = products; // Asigna los productos obtenidos a this.products
      // Renderiza los productos en la vista utilizando ProductView
      ProductView.renderProducts(products);
      this.updateTotalAndOptimal(); // Calcula el conjunto óptimo y actualiza el total de calorías
    } catch (error) {
      console.error(error.message);
    }

    // Agrega un evento "submit" al formulario de productos para manejar el envío del formulario
    const productForm = document.getElementById("productForm");
    productForm.addEventListener("submit", this.handleFormSubmit.bind(this));
  },

  // Función "handleFormSubmit" para manejar el envío del formulario de productos
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

    // Crea un nuevo producto con los valores ingresados en el formulario
    const newProduct = {
      peso: pesoInput,
      calorias: caloriasInput,
    };

    try {
      // Crea el nuevo producto en el backend utilizando el modelo ProductModel
      await ProductModel.createProduct(newProduct);
      ProductView.clearInputs(); // Limpia los campos de entrada en el formulario
      this.loadProducts(); // Recarga los productos después de crear el nuevo producto
    } catch (error) {
      console.error(error.message);
    }
  },

  // Función para eliminar un producto por su ID
  async deleteProduct(id) {
    try {
      // Elimina el producto con el ID proporcionado desde el backend utilizando el modelo ProductModel
      await ProductModel.deleteProduct(id);
      this.loadProducts(); // Recarga los productos después de eliminar el producto
    } catch (error) {
      console.error(error.message);
    }
  },

  // Función para editar un producto por su ID, peso y calorías
  async editProduct(id, peso, calorias) {
    const editedProduct = {
      id,
      peso,
      calorias,
    };

    try {
      // Edita el producto con los datos proporcionados en el backend utilizando el modelo ProductModel
      await ProductModel.editProduct(editedProduct);
      this.loadProducts(); // Recarga los productos después de editar el producto
    } catch (error) {
      console.error(error.message);
    }
  },

  // Función para cargar los productos desde el backend y renderizarlos en la vista
  async loadProducts() {
    try {
      // Obtiene todos los productos desde el backend utilizando el modelo ProductModel
      const products = await ProductModel.getAllProducts();
      this.products = products; // Asigna los productos obtenidos a this.products
      // Renderiza los productos en la vista utilizando ProductView
      ProductView.renderProducts(products);
      this.updateTotalAndOptimal(); // Calcula el conjunto óptimo y actualiza el total de calorías
    } catch (error) {
      console.error(error.message);
    }
  },

  // Función para actualizar el conjunto óptimo de elementos y el total de calorías
  updateTotalAndOptimal() {
    const minCalories = 500; // Valor mínimo de calorías para el conjunto óptimo
    const maxWeight = 15; // Peso máximo permitido

    // Calcula el conjunto óptimo de elementos y el valor total de calorías utilizando el modelo ProductModel
    const { optimalItems, totalCalories } =
      ProductModel.calculateOptimalElements(
        this.products,
        minCalories,
        maxWeight
      );

    // Renderiza el conjunto óptimo de elementos y el total de calorías en la vista utilizando ProductView
    ProductView.renderOptimalElements(optimalItems, totalCalories);
  },
};
export default ProductController;
