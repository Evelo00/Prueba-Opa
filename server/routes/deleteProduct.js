const express = require("express");
const { Elemento } = require("../db.js");
const router = express.Router();

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const elemento = await Elemento.findByPk(id);
    if (!elemento) {
      return res.status(404).json({ message: "Elemento no encontrado." });
    }
    await elemento.destroy();
    return res.json(elemento);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al eliminar el elemento." });
  }
});

module.exports = router;
