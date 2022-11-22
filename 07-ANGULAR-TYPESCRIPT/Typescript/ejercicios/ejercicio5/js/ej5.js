//Crear un objeto (clase) que me permita manipular elementos de texto, esta clase no tendrá ninguna propiedad (implica que no tenemos obligación de crear el método constructor)
//Debemos implentar de manera obligatoria:
var modificarTextos = /** @class */ (function () {
    function modificarTextos() {
    }
    modificarTextos.prototype.contarLetras = function (pFrase) {
        var sinEspacios = this.sinEspaciosBlanco(pFrase);
        return sinEspacios.length;
    };
    modificarTextos.prototype.letrasRepes = function (pFrase, pLetra) {
        var numeroLetras = pFrase.indexOf(pLetra, 0);
        console.log(numeroLetras);
        return 0;
    };
    modificarTextos.prototype.sinEspaciosBlanco = function (pFrase) {
        var palabras = pFrase.split(" ");
        var sinEspacios = palabras.join("");
        return sinEspacios;
    };
    return modificarTextos;
}());
var frase1 = new modificarTextos();
console.log(frase1.contarLetras('En un lugar de la mancha'));
console.log(frase1.letrasRepes('En un lugar de la mancha', 'a'));
console.log(frase1.sinEspaciosBlanco('En un lugar de la mancha'));
