const express = require('express');
const router = express.Router();

const routesEmpleados = require('./empleados/empleadosRoutes.js');
const routesClientes = require('./clientes/clientesRoutes.js');


router.use('/empleado', routesEmpleados);
router.use('/cliente', routesClientes);

module.exports = router;
