require("dotenv").config();
const { Sequelize } = require("sequelize");
const elementosModel = require("./models/elementos");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE, DB_PORT } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
  {
    dialect: "postgres",
    logging: false,
    native: false,
  }
);

const Elemento = elementosModel(sequelize);

// Agrega esta función para crear un elemento inicial al iniciar la base de datos
async function createInitialElement() {
  try {
    // Insertar un elemento en la tabla
    const elemento = await Elemento.create({
      peso: 100, // Peso del elemento
      calorias: 200, // Calorías del elemento
    });

    console.log("Elemento creado:", elemento.toJSON());
  } catch (error) {
    console.error("Error al crear el elemento inicial:", error);
  }
}

// Sincronizar la base de datos y luego crear el elemento inicial
sequelize
  .sync()
  .then(() => createInitialElement())
  .catch((error) =>
    console.error("Error al sincronizar la base de datos:", error)
  );

module.exports = {
  sequelize,
  Elemento,
};
