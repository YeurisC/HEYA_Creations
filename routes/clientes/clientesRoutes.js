const express = require('express');
const router = express.Router();
const clientesController = require('../../controllers/Clientes/clientesControllers.js');

 
router.get('/mostrar_viaje', clientesController.MostrarViaje);//Ejemplo

module.exports = router;

