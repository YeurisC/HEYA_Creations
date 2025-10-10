require('dotenv').config();
const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
 
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

const mainRoutes= require('./routes/empleados/empleadosRoutes.js');


app.use('/',mainRoutes);
 
const port =process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
