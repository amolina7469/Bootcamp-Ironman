const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.end('Hola sever!');
});

//req hace referencia a la petición que realizamos al server
//res hace referencia a la respuesta que devuelve el server

server.listen(3000); // puerto por el que escucharemos las peticiones que ejecutará la función anterior