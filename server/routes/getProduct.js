const express = require("express");
const { Elemento } = require("../db.js");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // Consulta a la base de datos para obtener todos los elementos mediante Elemento.findAll()
    const elementos = await Elemento.findAll();
    // Envío de la respuesta en formato JSON con los elementos obtenidos
    return res.json(elementos);
  } catch (error) {
    // En caso de error, se imprime el error en la consola y se envía una respuesta de error con un mensaje JSON.
    console.log(error);
    return res.status(500).json({ message: "Error al obtener los elementos." });
  }
});

module.exports = router;
