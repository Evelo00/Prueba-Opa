const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./routes/router");
const { sequelize } = require("./db");

dotenv.config();
const app = express();

// Configuración de middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas de la aplicación
app.use(routes);



module.exports = app;