const dotenv = require("dotenv");
dotenv.config();

const { sequelize } = require("./db");
const app = require("./app");

const BACK_URL = process.env.BACK_URL;
const PORT = process.env.PORT || 3001;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión establecida con la base de datos.");
    app.listen(PORT, () => {
      console.log(`Servidor funcionando en http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Error al conectar con la base de datos:", err);
  }
})();
