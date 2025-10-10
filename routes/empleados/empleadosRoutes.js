const express = require('express');
const router = express.Router();
const EmpleadoControllers = require('../../controllers/Empleados/empleadosControllers.js');

 
router.get('/index', EmpleadoControllers.MostrarIndex);

module.exports = router;