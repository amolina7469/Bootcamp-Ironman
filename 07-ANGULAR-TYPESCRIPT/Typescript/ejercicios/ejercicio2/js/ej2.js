// dado un número cualquiera aleatorio y entero entre 0 y 10, hacer una aplicación que me devuelva el factorial de numero
// 5 -->5 * 4 * 3 * 2 * 1 =120
//me tiene que devolverpor consola, el factorial y la serie de números
var numero = Math.round(Math.random() * 10);
function factorial(pNumero) {
    var resultado = 1;
    var serie = [];
    for (var i = numero; i >= 1; i--) {
        resultado *= i;
        serie.push(i);
    }
    return { miFactorial: resultado, miSerie: serie };
}
var respuesta = factorial(numero);
console.log(respuesta.miFactorial);
console.log(respuesta.miSerie);
// console.log(`El resultado es ${respuesta.miFactorial}`)
