import ProductModel from "./model.js";
import ProductController from "./controller.js";
import ProductView from "./view.js";

// Objeto ProductApp para inicializar la aplicación
const App = {
  // Función "init" para inicializar la aplicación
  async init() {
    try {
      // Obtiene todos los productos desde el backend utilizando el modelo ProductModel
      const products = await ProductModel.getAllProducts();
      // Renderiza los productos en la vista utilizando ProductView
      ProductView.renderProducts(products);
      // Inicializa el controlador con los productos obtenidos
      ProductController.init(products);
    } catch (error) {
      console.error(error.message);
    }

    // Agrega un evento "submit" al formulario de productos para manejar el envío del formulario
    const productForm = document.getElementById("productForm");
    productForm.addEventListener(
      "submit",
      ProductController.handleFormSubmit.bind(ProductController)
    );
  },
};

App.init();
// Inicializa la aplicación llamando a la función "init" del controlador ProductController
ProductController.init();
