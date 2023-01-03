/**
 * 
 * 1 - Generar dentro del directorio ficheros algún fichero más (segundo.txt, tercero.md, curriculum.doc...) con el contenido que queráis.
 * 2 - Listar todos los ficheros dentro de la carpeta ficheros (readdir)
 *      - ¿Qué me devuelve readdir?
 * 3 - Leemos el contenido de aquellos ficheros que tengan extensión .md
 *      - ¿Cómo miro la extensión del fichero?
 * 
 */


const fs = require('fs');

const files = fs.readdirSync('./ficheros');
console.log(files);
files.forEach((file)=>{
  if(file.indexOf('.md')!== -1){
    const data = fs.readFileSync('./ficheros/'+ file,'utf-8');
    console.log(data);
  }
});