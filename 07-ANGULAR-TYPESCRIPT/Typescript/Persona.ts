interface IPersona {
  name: string;
  age: number;
  cambiarEdad(pAge: number):void
  // saludar(): void
}

class Persona implements IPersona {

/*Las propiedades y metodos de una clase en typescript tienen los siguientes atributos de privacidad 
public -> es el que tenemos por defecto
protected -> sólo pueden acceder a esos metodos y propiedades aquellas clases que heredan de persona
private _> nadie puedee acceder a este método o propiedad, sólo la propia clase
*/ 

  name: string = "";
  age: number = 0;

  constructor(pName: string = 'Anonima'){
    this.name =pName;
  }
// cuando una funcion no hace return devuelve void
  cambiarEdad(pAge: number):void {
    this.age = pAge;
  }

  protected  saludar(): void {
    console.log('Hola '+ this.name)
  }

}

let persona1 = new Persona ()
console.log(persona1)

let persona2 = new Persona('Juan Antonio')
console.log(persona2.name)


//alumno hereda de persona sus propiedades publicas o protected
class Alumno extends Persona {
 getSaludo() {
  this.saludar();
 }
}

let alumno = new Alumno ('Joaquin');
alumno.getSaludo();