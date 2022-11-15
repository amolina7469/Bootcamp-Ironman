//* Propiedad o método privado
//! NO PUEDEN SER VISTOS NI UTILIZADOS FUERA DE LA CLASE

class CocheSeat {
  // el guión bajo servía antes de indicativo de que esa propiedad o método no se quería que se utilizara fuera de la clase
  _marca = 'Seat'
  //! es obligatorio declarar todas las propiedades que sean privadas ANTES DE DARLE algún valor con el constructor
  #modelo
  #puertas

  constructor (modelo, puertas) {
    this.#modelo = modelo
    this.#puertas = puertas

    this.#arrancar()
  }

  infoCoche () {
    console.log(`Este coche es un ${this._marca} ${this.#modelo}`)
  }

  #arrancar () {
    console.log('¡Ruunnn!')
  }

  // setter --> función que suele usarse para cambiar una propiedad de un objeto
  setPuertas (numeroPuertas) {
    if (typeof numeroPuertas !== 'number') {
      return
    }

    if (numeroPuertas !== 3 && numeroPuertas !== 5) {
      return
    }


    this.#puertas = numeroPuertas
  }

  // getter --> función que suele usarse para OBTENER el valor de una propiedad desde fuera
  getPuertas () {
    return this.#puertas
  }
}

const coche1 = new CocheSeat('León', 3)
console.log(coche1.puertas)
coche1.infoCoche()


// coche1.#arrancar() //! no se puede!
// console.log(coche1.#modelo) //! no se puede!
// coche1.#modelo = '406' //! no se puede!


// Si queremos privatizar una propiedad para que no la puedan cambiar por lo que les venga en gana, podemos privatiarla y cambiar su valor usando una función interna

console.log(coche1)

coche1.setPuertas('🐶') //! ahora no puedo porque he capado la posibilidad de meter algo que no sea un number
coche1.setPuertas(17) //! no se puede porque solo me deja poner 3 o 5

coche1.setPuertas(5) //* ahora sí que sí

// console.log(coche1.#puertas) //! no se puede
console.log('Puertas: ', coche1.getPuertas())

console.log(coche1)


//* ========================================== *//
//* ========================================== *//

//* Propiedades y métodos "static"
//? El modificador "static" se usa para hacer que propiedades y/o métodos puedan ser usados SIN NECESIDAD DE INSTANCIAR LA CLASE

class Mates {
  pi = 3.14159
  static fibonacci = [1, 1, 2, 3, 5, 8, 13, 21]

  static sumar (num1, num2) {
    console.log(num1 + num2)
  }

  restar (num1, num2) {
    console.log(num1 - num2)
  }
}


const mates1 = new Mates()
// console.log(mates1)
// console.log(mates1.pi)
// mates1.restar(5, 7)

// para poder usar la función sumar solo tengo que llamar a la clase "Mates" directamente
Mates.sumar(4, 3)

console.log(Mates.fibonacci)

// Si os acordais, ya existe en JavaScript una clase llamada Math que te aporta un montón de funciones y propiedades SIN NECESIDAD DE INSTANCIARLA
console.log(Math)
console.log(Math.PI)
console.log(Math.random())
