//Vamos a crear una aplicacion que me permita generar calculadoras de diferentes marcas. Cada calculadora que yo cree tiene que implementar obligatoriamente tres metodos sumar, restar, multiplicar a parte de poder recibir la marca de la calculadora, CASIO.
//Clase Calculadora
var Calculadora = /** @class */ (function () {
    function Calculadora(pMarca) {
        this.marca = "";
        this.marca = pMarca;
    }
    Calculadora.prototype.sumar = function (pNumero, pNumero2) {
        var resultado = pNumero + pNumero2;
        return resultado;
    };
    Calculadora.prototype.restar = function (pNumero, pNumero2) {
        var resultado = pNumero - pNumero2;
        return resultado;
    };
    Calculadora.prototype.multiplicar = function (pNumero, pNumero2) {
        var resultado = pNumero * pNumero2;
        return resultado;
    };
    return Calculadora;
}());
var respuesta;
do {
    var marcaCalculadora = prompt('Dime la marca de la calculadora que vas a crear:');
    var calculadora1 = new Calculadora(marcaCalculadora);
    console.log(calculadora1);
    respuesta = prompt("\u00A1Bienvenid@ a la calculadora ".concat(calculadora1.marca, "\n  \u00BFQu\u00E9 quieres hacer?\n  (s) sumar\n  (r) restar\n  (m) multiplicar\n  (X) salir"));
    switch (respuesta) {
        case 's': {
            var numero = Number(prompt('Dime un número:'));
            var numero2 = Number(prompt('Dime otro número:'));
            var resultado = calculadora1.sumar(numero, numero2);
            console.log(resultado);
            break;
        }
        case 'r': {
            var numero = Number(prompt('Dime un número:'));
            var numero2 = Number(prompt('Dime otro número:'));
            var resultado = calculadora1.restar(numero, numero2);
            console.log(resultado);
            break;
        }
        case 'm': {
            var numero = Number(prompt('Dime un número:'));
            var numero2 = Number(prompt('Dime otro número:'));
            var resultado = calculadora1.multiplicar(numero, numero2);
            console.log(resultado);
            break;
        }
    }
} while (respuesta != 'x');
