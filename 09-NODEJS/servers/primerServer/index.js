const express = require('express');

//Config .env
require('dotenv').config()

//Generamos una aplicación de Express
const app = express();

//GET localhost:3000
app.get('/', (req, res) => {
  res.end('Petición GET localhost:3000')
});

//POST localhost:3000/contacto/new
app.post('/contacto/new', (req, res)=>{
  res.end('Creamos un contacto!!!!');
})

//?Crear varaible con condicional simple
// let PORT;
// if(!process.env.PORT){
//   PORT = 3000;
// }else {
//   PORT = process.env.PORT;
// }

//?Simplificamos el if
// let PORT = 3000;
// if(process.env.PORT){
//   PORT=process.env.PORT;
// }

//? Definir el valor de una variable en función de una condición
// const PORT = process.env.PORT ? process.env.PORT : 3000;


//?Con un operador OR
const PORT = process.env.PORT || 3000;

// Poner mi app a escuchar sobre un puerto
app.listen(PORT, ()=>{
  console.log(`Servidor escuchando puerto ${PORT}!`);
});