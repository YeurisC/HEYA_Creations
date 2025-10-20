


  //Renderizacion de Index Empleados
  exports.Index_empleados = (req, res) => {
    res.render('pages/empleados/panel_empleados.njk', {
      title: 'Home'
    });
  };

//Renderizacion de Ganancias Empleados
exports.Ganancias_empleados = (req, res) => {
    res.render('pages/empleados/ganancias_empleados.njk', {
      title: 'Gananciad'
    });
  };

  //Renderizacion de inventario Empleados
exports.Inventario_empleados = (req, res) => {
    res.render('pages/empleados/inventario_empleados.njk', {
      title: 'Inventario'
    });
  };

