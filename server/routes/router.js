const { Router } = require("express");
const router = Router();
const createProduct = require("./createProduct.js"); 
const deleteProduct = require("./deleteProduct.js");
const getProduct = require("./getProduct.js");
const editProduct = require("./editProduct.js");


router.use("/", getProduct);
router.use("/", createProduct);
router.use("/", deleteProduct);
router.use("/", editProduct);

module.exports = router;



