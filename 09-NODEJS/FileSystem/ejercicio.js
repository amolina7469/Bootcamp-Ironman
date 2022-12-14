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

// const files = fs.readdirSync('./ficheros');
// console.log(files);
// files.forEach((file)=>{
//   if(file.indexOf('.md')!== -1){
//     const data = fs.readFileSync('./ficheros/'+ file,'utf-8');
//     console.log(data);
//   }
// });
//============================================//
// const files = fs.readdirSync('./ficheros');
// console.log(files);
// files.forEach((file)=>{
//   if(file.includes('.md')){
//     const data = fs.readFileSync('./ficheros/'+ file,'utf-8');
//     console.log(data);
//   }
// });
//===========================================//
// const files = fs.readdirSync('./ficheros');
// console.log(files);
// const arrFiltro = files.filter(file => file.includes('md'));
// for(i=0; i < arrFiltro.length; i++){
//   const data = fs.readFileSync('./ficheros/'+ arrFiltro[i],'utf-8');
//   console.log(data);
// };
//============================================//
// fs.readdir('./ficheros', (err, files)=>{
//   for (let file of files){
//     if(file.endsWith('.md')){
//       const data = fs.readFileSync(`./ficheros/${file}`, 'utf-8');
//       console.log(data);
//     }
//   }
// });
//============================================//
fs.readdirSync('./ficheros')
  .filter(file => file.endsWith('.md'))
  .forEach(file => {
    const data = fs.readFileSync(`./ficheros/${file}`, 'utf-8');
    console.log(data);
  });