require("dotenv").config();
import { Pool } from "pg";

// Configuración de conexión a la base de datos
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const crearTablaElementos = async () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS elementos (
      id SERIAL PRIMARY KEY,
      peso INTEGER,
      calorias INTEGER
    );
  `;

  try {
    await pool.query(createTableQuery);
    console.log("Tabla elementos creada exitosamente.");
  } catch (error) {
    console.error("Error al crear la tabla elementos:", error);
  }
};

const cerrarConexion = () => {
  pool.end();
  console.log("Conexión a la base de datos cerrada.");
};

export default {
  crearTablaElementos,
  cerrarConexion,
};
