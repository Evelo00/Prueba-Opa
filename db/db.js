const { Pool } = require("pg");
const { Sequelize } = require("sequelize");
const elementosModel = require("./modules/elementos");
require("dotenv").config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "elementos",
  port: process.env.DB_PORT,
});

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

const Elementos = elementosModel(sequelize);
sequelize.sync({ force: false }).then(() => {
  console.log("Tabla elementos creada exitosamente.");
});

module.exports = {
  pool,
  Elementos,
};
