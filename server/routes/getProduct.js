const express = require("express");
const { Elemento } = require("../db.js");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const elementos = await Elemento.findAll();
    return res.json(elementos);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al obtener los elementos." });
  }
});

module.exports = router;
