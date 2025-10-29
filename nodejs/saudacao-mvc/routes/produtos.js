const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');


router.get("/",produtosController.produtos);
router.get("/camisetas",produtosController.camisetas);
//router.get("/cadastrar",produtosController.forCadastra);
//router.post("/cadstrar",produtosController.cadastrar);

module.exports = router;