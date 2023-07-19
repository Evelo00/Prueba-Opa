const express = require("express");
const { Elemento } = require("../db.js");
const router = express.Router();

router.put("/:id", async (req, res) => {
  // Extracción del parámetro "id" de la URL
  const { id } = req.params;
  // Extracción de los datos "peso" y "calorias" del cuerpo de la solicitud
  const { peso, calorias } = req.body;
  try {
    // Búsqueda del elemento en la base de datos mediante el ID proporcionado utilizando Elemento.findByPk(id)
    const elemento = await Elemento.findByPk(id);
    // Si el elemento no se encuentra, se envía una respuesta de error con un mensaje JSON.
    if (!elemento) {
      return res.status(404).json({ message: "Elemento no encontrado." });
    }
    // Actualización de los datos del elemento con los nuevos valores proporcionados en el cuerpo de la solicitud
    await elemento.update({
      peso,
      calorias,
    });
    return res.json(elemento);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al editar el elemento." });
  }
});

module.exports = router;
