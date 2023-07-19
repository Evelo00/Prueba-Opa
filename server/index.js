// Importación de la librería dotenv para cargar las variables de entorno desde el archivo .env
const dotenv = require("dotenv");
dotenv.config();

// Importación del objeto sequelize desde el archivo db para la interacción con la base de datos
const { sequelize } = require("./db");

// Importación del objeto app desde el archivo app que probablemente representa la lógica del framework de aplicación
const app = require("./app");

// Asignación de la variable de entorno BACK_URL a la constante BACK_URL
const BACK_URL = process.env.BACK_URL;

// Asignación de la variable de entorno PORT a la constante PORT, o 3001 si no está definida
const PORT = process.env.PORT || 3001;

// Función asíncrona autoejecutable para manejar la conexión a la base de datos y el inicio del servidor
(async () => {
  try {
    // Intento de autenticación con la base de datos utilizando sequelize.authenticate()
    await sequelize.authenticate();
    // Si la autenticación tiene éxito, se muestra un mensaje en la consola indicando la conexión establecida.
    console.log("Conexión establecida con la base de datos.");

    // Inicio del servidor con el método app.listen() que escucha las solicitudes en el puerto especificado.
    app.listen(PORT, () => {
      console.log(`Servidor funcionando en http://localhost:${PORT}`);
    });
  } catch (err) {
    // Captura de errores durante la conexión a la base de datos y muestra un mensaje de error en la consola.
    console.error("Error al conectar con la base de datos:", err);
  }
})();
