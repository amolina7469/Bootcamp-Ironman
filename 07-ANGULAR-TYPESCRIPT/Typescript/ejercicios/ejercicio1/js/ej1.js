// Escribir un programa que me permita determinar si un número pasado por parámetro es para o impar.
//para poder ejecutar typescript de forma automática usamos el comando
//tsc --watch ts/ej1.ts --outDir js
var numero = Number(prompt('Dime un número:'));
function parImpar(numero) {
    var mensaje = "";
    if (numero % 2 === 0) {
        mensaje = 'Es número par';
    }
    else {
        mensaje = 'Es número impar';
    }
    return mensaje;
}
console.log(parImpar(42));
