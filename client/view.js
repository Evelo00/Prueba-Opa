const ProductView = {
  // Referencias a elementos HTML para mostrar la lista de productos y la lista óptima
  productList: document.getElementById("listaElementos"),
  optimalList: document.getElementById("listaOptima"),
  // Referencias a elementos HTML para mostrar el peso total y las calorías totales
  pesoTotal: document.getElementById("pesoTotal"),
  caloriasTotales: document.getElementById("caloriasTotales"),

  // Función para renderizar la lista de productos en el elemento HTML productList
  renderProducts(products) {
    this.productList.innerHTML = products
      .map(
        (product) =>
          `<li>
            ${product.peso} - Calorías: ${product.calorias}
            <button class="delete-button" data-id="${product.id}">Eliminar</button>
            <button class="edit-button" data-id="${product.id}">Editar</button>
          </li>`
      )
      .join("");
  },
  // Función para renderizar la lista óptima de elementos en el elemento HTML optimalList
  renderOptimalElements(optimalItems, totalCalories) {
    this.optimalList.innerHTML = optimalItems
      .map((item) => `<li>${item.peso} - Calorías: ${item.calorias}</li>`)
      .join("");
    this.pesoTotal.textContent = `Peso total: ${optimalItems.reduce(
      (total, item) => total + item.peso,
      0
    )}`;
    this.caloriasTotales.textContent = `Calorías totales: ${totalCalories}`;
  },

  // Función para limpiar los campos de entrada en el formulario
  clearInputs() {
    document.getElementById("pesoInput").value = "";
    document.getElementById("caloriasInput").value = "";
  },

  // Función para asignar un manejador de eventos al botón "Eliminar" de cada producto en la lista
  bindDeleteButton(handler) {
    this.productList.addEventListener("click", (event) => {
      if (event.target.classList.contains("delete-button")) {
        const productId = event.target.dataset.id;
        handler(productId);
      }
    });
  },

  // Función para asignar un manejador de eventos al botón "Editar" de cada producto en la lista
  bindEditButton(handler) {
    this.productList.addEventListener("click", (event) => {
      if (event.target.classList.contains("edit-button")) {
        const productId = event.target.dataset.id;
        const productPeso = parseFloat(
          event.target.parentNode.querySelector(".product-peso").textContent
        );
        const productCalorias = parseFloat(
          event.target.parentNode.querySelector(".product-calorias").textContent
        );
        handler(productId, productPeso, productCalorias);
      }
    });
  },

  // Función para actualizar la información de un producto en la lista después de la edición
  updateProduct(id, updatedProduct) {
    const productElement = document.getElementById(`product-${id}`);
    productElement.innerHTML = `${updatedProduct.peso} - Calorías: ${updatedProduct.calorias} <button class="delete-button" data-id="${id}">Eliminar</button><button class="edit-button" data-id="${id}">Editar</button>`;
  },

  // Función para eliminar un producto de la lista
  deleteProduct(id) {
    const productElement = document.getElementById(`product-${id}`);
    productElement.remove();
  },

  // Función para agregar un nuevo producto a la lista
  addProduct(newProduct, handler) {
    const newProductElement = document.createElement("li");
    newProductElement.id = `product-${newProduct.id}`;
    newProductElement.innerHTML = `${newProduct.peso} - Calorías: ${newProduct.calorias} <button class="delete-button" data-id="${newProduct.id}">Eliminar</button><button class="edit-button" data-id="${newProduct.id}">Editar</button>`;
    this.productList.appendChild(newProductElement);
    this.clearInputs();
    handler(newProduct.id);
  },
};

export default ProductView;
