const express = require('express');
const router = express.Router();
const clientesController = require('../../controllers/clientes/clientesControllers.js');

 //Ruta para la pagina Index de Clientes
router.get('/', clientesController.Index_clientes);

 //Ruta para la pagina Catalogo secciones
 router.get('/catalogo_secciones', clientesController.Catalogo_secciones);

  //Ruta para la pagina Catalogo clientes
  router.get('/catalogo', clientesController.Catalogo_clientes);

  //Ruta para la pagina Mostrar producto
  router.get('/producto', clientesController.Mostrar_producto);

  module.exports = router;






module.exports = router;

