// escribir un programa que me permita determinar que una cadena de caracteres es un palíndromo. No tiene en cuenta los espacios.

//1.Almacenar una frase en una variable
//2.pasar a minuscula la frase
//3. quitar espacios
// 4.darle la vuelta
// 5.comparar si son iguales los dos elementos el original y el dado la vuelta


let frase: string | null = prompt('Introduce una frase:');
console.log(frase)

function isPalindromo (frase: string |null) :boolean {
  let resultado: boolean = true;
  let minuscula: string ="";
  minuscula= frase.toLowerCase();
  console.log(minuscula)
  const palabras: string[]= minuscula.split(" ");
  console.log(palabras)
  const sinEspacios: string = palabras.join("")
  


 return resultado

}

isPalindromo(frase)
 