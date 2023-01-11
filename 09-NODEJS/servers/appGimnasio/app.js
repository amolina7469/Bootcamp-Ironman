const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dayjs = require('dayjs');
const fs = require('fs');
const cors = require('cors');


//Creación de la aplicación de Express
const app = express();


//Configuración de mi app de Express
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//? Middlewares
//Imprime la fecha
app.use((req, res, next)=>{
  const currentDate = dayjs().format('DD-MM-YYYY HH:mm:ss');
  console.log(currentDate);
  next();
});

//? Numero aleatorio 
//Si es mayor de 0.6 respondemos a la petición con un error
//Si es menor de 0.6 llamamos a next
// app.use((req, res, next)=>{
//   const numberRandom = Math.random();
//   console.log(numberRandom);
//   if(numberRandom > 0.6){
//     return res.send('Error el número es mayor de 0.6');
//   }
//     next();
// });

//? Middleware que escriba en un fichero datos sobre la petición que entra en nuestro server
app.use((req, res, next) => {
  //[FECHA] método GET. Url: /api/clientes
  const currentDate =dayjs().format('DD-MM-YYYY HH:mm:ss');
  const line = `[${currentDate}] Método: ${req.method}. Url: ${req.url}\n`;

  fs.appendFile('./logs/main.log', line, (err)=>{
    if (err) {
      return res.send(err.message);
    }
    next();
  })
});



//Gestión de rutas
app.use('/api', require('./routes/api'));

module.exports = app;
