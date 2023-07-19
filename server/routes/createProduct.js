const express = require("express");
const router = express.Router();
const { Elemento } = require("../db");

router.post("/", async (req, res) => {
  // Extracción de los datos "peso" y "calorias" del cuerpo de la solicitud
  const { peso, calorias } = req.body;
  try {
    // Creación de un nuevo elemento en la base de datos con los datos proporcionados
    const elemento = await Elemento.create({
      peso,
      calorias,
    });
    // Envío de la respuesta en formato JSON con el elemento creado
    res.json(elemento);
  } catch (error) {
    // En caso de error, se imprime el error en la consola
    console.log(error);
  }
});

module.exports = router;
