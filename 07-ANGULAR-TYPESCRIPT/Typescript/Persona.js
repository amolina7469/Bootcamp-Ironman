var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(pName) {
        if (pName === void 0) { pName = 'Anonima'; }
        /*Las propiedades y metodos de una clase en typescript tienen los siguientes atributos de privacidad
        public -> es el que tenemos por defecto
        protected -> sólo pueden acceder a esos metodos y propiedades aquellas clases que heredan de persona
        private _> nadie puedee acceder a este método o propiedad, sólo la propia clase
        */
        this.name = "";
        this.age = 0;
        this.name = pName;
    }
    // cuando una funcion no hace return devuelve void
    Persona.prototype.cambiarEdad = function (pAge) {
        this.age = pAge;
    };
    Persona.prototype.saludar = function () {
        console.log('Hola ' + this.name);
    };
    return Persona;
}());
var persona1 = new Persona();
console.log(persona1);
var persona2 = new Persona('Juan Antonio');
console.log(persona2.name);
//alumno hereda de persona sus propiedades publicas o protected
var Alumno = /** @class */ (function (_super) {
    __extends(Alumno, _super);
    function Alumno() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Alumno.prototype.getSaludo = function () {
        this.saludar();
    };
    return Alumno;
}(Persona));
var alumno = new Alumno('Joaquin');
alumno.getSaludo();
