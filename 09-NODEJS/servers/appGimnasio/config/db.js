const mysql = require('mysql2');

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'Nook&7469',
  port: 3306,
  database: 'gimnasio_iron'
});

global.db = pool.promise();