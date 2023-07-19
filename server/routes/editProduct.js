const express = require("express");
const { Elemento } = require("../db.js");
const router = express.Router();

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { peso, calorias } = req.body;
  try {
    const elemento = await Elemento.findByPk(id);
    if (!elemento) {
      return res.status(404).json({ message: "Elemento no encontrado." });
    }
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
