const express = require("express");
const router = express.Router();
const { Elemento } = require("../db");

router.post("/", async (req, res) => {
  const { peso, calorias } = req.body;
  try {
    const elemento = await Elemento.create({
      peso,
      calorias,
    });
    res.json(elemento);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
