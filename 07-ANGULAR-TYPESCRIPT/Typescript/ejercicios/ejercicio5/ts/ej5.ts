//Crear un objeto (clase) que me permita manipular elementos de texto, esta clase no tendrá ninguna propiedad (implica que no tenemos obligación de crear el método constructor)
//Debemos implentar de manera obligatoria:

//1. Elemento que permite contar las letras de cualquier frase pasada por argumento
//Ej: 'En un lugar de la mancha' --> 19 letras

//2. Método que me permitirá saber cuantas veces está repetida una letra en una frase
//Ej: 'En un lugar de la mancha' --> A = 4 veces

//3. Métod que elimine todos los espacios en blanco de una cadena de caracters. OJO los espacios pueden ser por delante o por detrás

//El orden de ejecucción IMPORTA


interface IModificarTextos{
  contarLetras(pFrase:string):number;
  letrasRepes(pFrase: string, letra: string): number;
  sinEspaciosBlanco(pFrase: string) : string;
}

class modificarTextos {


 contarLetras(pFrase:string):number{
  let sinEspacios = this.sinEspaciosBlanco(pFrase)
  return sinEspacios.length
 }

 letrasRepes(pFrase: string, pLetra : string): number{
  let numeroLetras = pFrase.indexOf(pLetra, 0)
  console.log(numeroLetras)
  
  return 0
 }

 sinEspaciosBlanco(pFrase: string) : string {
  const palabras: string[] = pFrase.split(" ");
  let sinEspacios: string = palabras.join("");
  return sinEspacios;
  
 }

}

const frase1 = new modificarTextos()

console.log(frase1.contarLetras('En un lugar de la mancha'))

console.log(frase1.letrasRepes('En un lugar de la mancha','a'))

console.log(frase1.sinEspaciosBlanco('En un lugar de la mancha') )
  
 
