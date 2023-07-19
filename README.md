# Documentación del Proyecto: Gestión de Elementos Óptimos

Este documento proporciona una descripción detallada del proyecto "Gestión de Elementos Óptimos", que es una aplicación de gestión de productos que calcula y muestra el conjunto óptimo de elementos según ciertos criterios de peso y calorías. El proyecto consta de un backend (servidor) y un frontend (interfaz de usuario) que se comunican para realizar las operaciones CRUD (crear, leer, actualizar y eliminar) sobre la lista de productos.

## Arquitectura del Proyecto

El proyecto se divide en tres partes principales:

1. Backend (Servidor): Escrito en Node.js utilizando Express, Sequelize y SQLite como base de datos. El backend proporciona las rutas y controladores para realizar operaciones CRUD en la base de datos de productos.

2. Frontend (Interfaz de Usuario): Escrito en HTML, CSS y JavaScript. El frontend interactúa con el backend a través de peticiones HTTP utilizando la biblioteca Axios.

3. Lógica del Problema: Contiene el algoritmo de la mochila (knapsack) implementado en JavaScript, que calcula el conjunto óptimo de elementos basado en un límite de peso y un valor mínimo de calorías.

## Backend

### Archivos Relevantes del Backend

1. **`app.js`**: Archivo principal del backend que inicia el servidor Express y establece la conexión con la base de datos.

2. **`db.js`**: Define y configura el modelo de la base de datos de productos utilizando Sequelize.

3. **`elemento.js`**: Modelo de la tabla "Elemento" que representa un producto en la base de datos.

4. **`elementosController.js`**: Controlador que maneja las operaciones CRUD relacionadas con los productos, como obtener todos los productos, crear, editar y eliminar un producto.

### Funcionalidades del Backend

- **Obtener todos los productos**: Ruta `GET /` que retorna una lista de todos los productos almacenados en la base de datos.

- **Crear un nuevo producto**: Ruta `POST /` que permite crear un nuevo producto en la base de datos a partir de los datos proporcionados en el cuerpo de la solicitud.

- **Editar un producto**: Ruta `PUT /:id` que permite editar un producto existente en la base de datos utilizando su ID.

- **Eliminar un producto**: Ruta `DELETE /:id` que permite eliminar un producto de la base de datos utilizando su ID.

## Frontend

### Archivos Relevantes del Frontend

1. **`index.html`**: Archivo HTML que representa la estructura de la interfaz de usuario.

2. **`style.css`**: Archivo CSS para el diseño y estilo de la interfaz de usuario.

3. **`model.js`**: Define el modelo `ProductModel` que maneja las peticiones HTTP hacia el backend para obtener, crear, editar y eliminar productos.

4. **`view.js`**: Define la vista `ProductView` que se encarga de renderizar los productos en el frontend y mostrar los resultados del conjunto óptimo.

5. **`controller.js`**: Contiene el controlador `ProductController` que maneja las interacciones del usuario, las llamadas al modelo y la actualización de la vista.

6. **`knapsack.js`**: Contiene la implementación del algoritmo de la mochila (knapsack) que calcula el conjunto óptimo de elementos.

### Funcionalidades del Frontend

- **Renderización de Productos**: La vista `ProductView` renderiza la lista de productos en el frontend.

- **Agregar Producto**: El controlador `ProductController` maneja la función de agregar un nuevo producto, enviando una solicitud HTTP POST al backend a través de `ProductModel`.

- **Editar Producto**: El controlador `ProductController` maneja la función de editar un producto existente, enviando una solicitud HTTP PUT al backend a través de `ProductModel`.

- **Eliminar Producto**: El controlador `ProductController` maneja la función de eliminar un producto, enviando una solicitud HTTP DELETE al backend a través de `ProductModel`.

- **Cálculo del Conjunto Óptimo**: La vista `ProductView` muestra el conjunto óptimo de elementos y el total de calorías calculados utilizando el algoritmo de la mochila (knapsack) implementado en `knapsack.js`.

## Uso de la Aplicación

1. **Inicio del Servidor**: Para ejecutar el proyecto, primero inicie el servidor backend ejecutando `node app.js` desde la carpeta del backend.

2. **Interfaz de Usuario**: Abra el archivo `index.html` en su navegador para acceder a la interfaz de usuario del frontend.

3. **Agregar Producto**: Complete los campos de "Peso del elemento" y "Calorías del elemento" en el formulario y haga clic en "Agregar Producto" para agregar un nuevo producto.

4. **Editar Producto**: Haga clic en el botón "Editar" junto a un producto para modificar su peso y calorías.

5. **Eliminar Producto**: Haga clic en el botón "Eliminar" junto a un producto para eliminarlo de la lista.

6. **Cálculo del Conjunto Óptimo**: La aplicación mostrará automáticamente el conjunto óptimo de elementos basado en el peso máximo permitido y el valor mínimo de calorías establecido en el controlador.

## Conclusiones

El proyecto "Gestión de Elementos Óptimos" es una aplicación que permite a los usuarios agregar, editar, eliminar y calcular el conjunto óptimo de elementos basado en ciertos criterios. El backend proporciona las API necesarias para realizar las operaciones CRUD, mientras que el frontend interactúa con el backend y muestra los resultados al usuario de manera amigable. La implementación del algoritmo de la mochila permite encontrar la combinación óptima de elementos que cumple con los criterios de peso y calorías especificados.

Este proyecto es una muestra de cómo se pueden utilizar tecnologías como Node.js, Express, Sequelize y Axios para desarrollar aplicaciones web interactivas y funcionales. Con esta documentación, los desarrolladores pueden comprender el funcionamiento y la estructura del proyecto para realizar mejoras, extensiones y personalizaciones según sea necesario.