const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Nook&7469',
  port: 3306,
  database: 'gimnasio_iron'
});

connection.connect((err)=>{
  console.log(err);
  // connection.query('select * from clientes', (err, result) => {
  //   console.log(err);
  //   console.log(result);
    //console.log(result.length);
    //console.log(result[0]);
  //});

    const clienteId = 31;
    const name = 'Ringo';
    connection.query(
      'select * from clientes where id = ?', 
      [clienteId], 
      (err, result)=>{
        console.log(err);
        //  El resultado de un select SIEMPRE es un ARRAY excepto si tengo un error
        console.log(result);
        connection.destroy();
      });
});