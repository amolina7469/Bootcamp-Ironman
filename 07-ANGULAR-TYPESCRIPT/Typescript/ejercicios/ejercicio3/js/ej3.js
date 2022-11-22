// escribir un programa que me permita determinar que una cadena de caracteres es un palíndromo. No tiene en cuenta los espacios.
//1.Almacenar una frase en una variable
//2.pasar a minuscula la frase
//3. quitar espacios
// 4.darle la vuelta
// 5.comparar si son iguales los dos elementos el original y el dado la vuelta
var frase = prompt('Introduce una frase:');
console.log(frase);
function isPalindromo(frase) {
    var resultado = true;
    var minuscula = "";
    minuscula = frase.toLowerCase();
    console.log(minuscula);
    var palabras = minuscula.split(" ");
    console.log(palabras);
    var sinEspacios = palabras.join("");
    return resultado;
}
isPalindromo(frase);
