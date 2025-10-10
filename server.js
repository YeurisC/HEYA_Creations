const {port} = require('./config/index.js');//Agregue esto
const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const empleadoRoutes = require('./routes/empleados/empleadosRoutes.js')
const clientesRoutes = require('./routes/clientes/clientesRoutes.js')

const app = express()
app.use(express.json());//agregamos esto
app.use(express.urlencoded({extended:true}))//agregamos esto

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true
});

app.set('view engine','njk');


app.use(express.static(path.join(__dirname,'public')));

const mainRoutes= require('./routes/mainRoutes.js');




//app.use('/',mainRoutes);
app.use('/empleado', empleadoRoutes);
app.use('/clientes', clientesRoutes);




/*const PORT=process.env.PORT || 3000*/

app.listen(port,()=>{
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
