// Importar FS
const fs = require('fs');
const fsPromise = require('fs/promises');

// Opcion 1: Síncrona

const files = fs.readdirSync('../Basicos');
console.log('SYNC',files);

// Opcion 2: Asíncrona con callback

fs.readdir('../Basicos', (err, files)=>{
  console.log(err);
  console.log('ASYNC', files);
});

// Opcion 3a: Asíncrona con promesas then-catch

fsPromise.readdir('../Basicos')
  .then((files)=>{
    console.log('PROM', files)
  })
  .catch((error)=>{
    console.log(error);
  });

// Opcion 3b: Asíncrona con promesas Async-await

async function ficheros(){
  const filesP = await fsPromise.readdir('../Basicos');
  console.log(filesP);
}
ficheros();