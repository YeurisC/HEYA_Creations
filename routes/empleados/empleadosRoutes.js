const express = require('express');
const router = express.Router();
const EmpleadoControllers = require('../../controllers/empleados/empleadosControllers.js');

//Ruta para la pagina Ganancias de Empleados
router.get('/ganancias', EmpleadoControllers.Ganancias_empleados);

module.exports = router;