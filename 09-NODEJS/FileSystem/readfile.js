const fs = require('fs');
const fsPromise = require('fs/promises');

// Opcion 1: Síncrona

const data = fs.readFileSync('./ficheros/primero.md','utf-8');
console.log(data);

// Opcion 2: Asíncrona con callback

fs.readFile('./ficheros/primero.md','utf-8',(err, data)=>{
  console.log(err);
  console.log(data);
});

// Opcion 3: Asíncrona con promesas Async-await

(async()=>{
  const data = await fsPromise.readFile('./ficheros/primero.md', 'utf-8');
  console.log(data)
})();
