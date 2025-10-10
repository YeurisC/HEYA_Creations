const express = require('express');
const router = express.Router();
const EmpleadoControllers = require('../../controllers/empleados/empleadosControllers.js');

//Ruta para la pagina Ganancias de Empleados
router.get('/ganancias', EmpleadoControllers.Ganancias_empleados);

//Ruta para la pagina Inventario de Empleados
router.get('/inventario', EmpleadoControllers.Inventario_empleados);

//Ruta para la pagina Index de Empleados
router.get('/index_empleados', EmpleadoControllers.Index_empleados);

module.exports = router;