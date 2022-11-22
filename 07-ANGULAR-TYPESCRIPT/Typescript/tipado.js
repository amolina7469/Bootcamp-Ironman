/* typescript añade tipado fuerte a javascript, ojo no es obligatorio. Aunque Angular tendrá typescript en modo estricto, luego me obligará a tipar*/
var nombre; //undefined
var nombre2; // ""
var numero = 0; // 0
var estado = false; //false
//typescript definir array de tipos
//opcion 1
var arrNum = [1, 2, 3, 4, 5, 6];
var arrColors = new Array('rojo', 'verde', 'azul');
//opción 2
var arrNombres = ['Juan', 'Alberto', 'Nacho', 'Rocío'];
//funciones en typescript - tipado de funciones
//función declarativa
function sumar(pNumero1, pNumero2) {
    return pNumero1 + pNumero2;
}
function sumar(pNumero3, pNumero4) {
    return String(pNumero3 + pNumero4);
}
// funciones expresivas, funcion expresión, arrow function, funciones anónimas.
var restar = function (pNumero1, pNumero2) {
    return pNumero1 - pNumero2;
};
console.log(restar(4, 2));
