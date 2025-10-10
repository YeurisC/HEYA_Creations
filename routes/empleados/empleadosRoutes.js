const express = require('express');
const router = express.Router();
const EmpleadoControllers = require('../../controllers/empleados/empleadosControllers.js');

 
router.get('/index', EmpleadoControllers.MostrarIndex);

module.exports = router;