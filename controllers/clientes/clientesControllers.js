  //Renderizacion de Index Clientes
  exports.Index_clientes = (req, res) => {
    res.render('pages/clientes/index_clientes.njk', {
      title: 'Home'
    });
  };

    //Renderizacion de seccion de catalogos
    exports.Catalogo_secciones = (req, res) => {
      res.render('pages/clientes/catalogo_secciones_clientes.njk', {
        title: 'Catalogos'
      });
    };

    //Renderizacion de seccion de catalogos
    exports.Catalogo_clientes = (req, res) => {
      res.render('pages/clientes/catalogo_clientes.njk', {
        title: 'Catalogo'
      });
    };

    //Renderizacion de mostrar productos
    exports.Mostrar_producto = (req, res) => {
      res.render('pages/clientes/mostrar_producto_clientes.njk', {
        title: 'Producto'
      });
    };
