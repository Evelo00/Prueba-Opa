const ProductView = {
  productList: document.getElementById("listaElementos"),
  optimalList: document.getElementById("listaOptima"), // Elemento para mostrar la lista óptima
  pesoTotal: document.getElementById("pesoTotal"),
  caloriasTotales: document.getElementById("caloriasTotales"),

  renderProducts(products) {
    this.productList.innerHTML = products
      .map(
        (product) => `<li>${product.peso} - Calorías: ${product.calorias}</li>`
      )
      .join("");
  },

  // Nueva función para renderizar el conjunto óptimo de elementos
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

  clearInputs() {
    document.getElementById("pesoInput").value = "";
    document.getElementById("caloriasInput").value = "";
  },

  bindDeleteButton(handler) {
    this.productList.addEventListener("click", (event) => {
      if (event.target.classList.contains("delete-button")) {
        const productId = event.target.dataset.id;
        handler(productId);
      }
    });
  },

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

  updateProduct(id, updatedProduct) {
    const productElement = document.getElementById(`product-${id}`);
    productElement.innerHTML = `${updatedProduct.peso} - Calorías: ${updatedProduct.calorias} <button class="delete-button" data-id="${id}">Eliminar</button><button class="edit-button" data-id="${id}">Editar</button>`;
  },

  deleteProduct(id) {
    const productElement = document.getElementById(`product-${id}`);
    productElement.remove();
  },

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
