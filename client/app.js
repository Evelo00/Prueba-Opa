import ProductModel from "./model.js";
import ProductController from "./controller.js";
import ProductView from "./view.js";

const ProductApp = {
  async init() {
    try {
      const products = await ProductModel.getAllProducts();
      ProductView.renderProducts(products);
      ProductController.init(products);
    } catch (error) {
      console.error(error.message);
    }

    const productForm = document.getElementById("productForm");
    productForm.addEventListener(
      "submit",
      ProductController.handleFormSubmit.bind(ProductController)
    );
  },
};

ProductController.init();
