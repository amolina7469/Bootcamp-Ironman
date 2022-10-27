// ? Funciones 04
// Crea una función que recibe como parámetro una fruta como string y devuelve la
// posicion del array donde esté esa fruta.
// Si no encuentra el elemento que devuelva -1 ;
// Guarda el valor que retorna la función y imprimela en la consola.

const arrayFrutas = ['Plátanos', 'Bananas', 'Piñas', 'Manzanas', 'Peras', 'Uvas', 'Pomelos']

// const myIndexOf = (valor, array) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === valor) {
//       const posicion = i
//       return posicion
//     }
//   }
//   const posicion = -1
//   return posicion
// }

// const posicion = myIndexOf('Piñas', arrayFrutas)
// console.log(posicion)

// const posicion2 = myIndexOf('Chirimoyas', arrayFrutas)
// console.log(posicion2)


// ? Funciones 05
// Crea una función que reciba el array de frutas y devuelva un string con todas las
// frutas separadas por una coma y un espacio.

// const myFunction = (array) => {
//   let stringFinal = ''
//   const comillas = '"'

//   for (let i = 0; i < array.length; i++) {
//     if (i === 0) {
//       stringFinal += comillas + array[i] + ', '
//     } else if (i === array.length - 1) {
//       stringFinal += array[i] + comillas
//     } else {
//       stringFinal += array[i] + ', '
//     }
//   }
//   return stringFinal
// }

// console.log(myFunction(arrayFrutas))

// * ======================================== *//


// const myFunction2 = (array, separador) => {
//   let stringFinal = ''
//   const comillas = '"'
//   const espacio = ' '
//   for (let i = 0; i < array.length; i++) {
//     if (i === 0) {
//       stringFinal += comillas + array[i] + separador + espacio
//     } else if (i === array.length - 1) {
//       stringFinal += array[i] + comillas
//     } else {
//       stringFinal += array[i] + separador + espacio
//     }
//   }
//   return stringFinal
// }

// console.log(myFunction2(arrayFrutas, ';'))


// ? Funciones 06
// Crea una función que reciba el array de frutas y que te devuelva un nuevo array al
// revés.

// const alreves = (array) => {
//   const arrayInverso = []
//   let j = array.length - 1
//   for (let i = 0; i < array.length; i++) {
//     arrayInverso[j] = String(array[i])
//     j--
//   }
//   return arrayInverso
// }
// alreves(arrayFrutas)
// console.log(alreves(arrayFrutas))


// ? fUNCIONES 07 🍒
// Crear una calculadora:
// Crea un bucle en el que el programa pregunta diferentes opciones (como si
// fuera un menú).
// Las opciones serán (s) sumar, (r) restar, (m) multiplicar, (d) dividir, (e)
// exponencial, (p) porcentaje y (x) salir.
// La calculadora seguirá ejecutándose hasta que el usuario aprete la letra x que
// será salir.
// Para cada letra entre las opciones, crear la función que se encargará de hacer
// cada operación.
// Dentro de cada función, pediremos al usuario los datos necesarios para relizar
// esa operación.
// Que se imprima por consola el resultado de cada operación.
// No hace falta que las funciones devuelvan nada, solo que impriman por consola.
// Refactoriza para que haya el menor número de cosas repetidas.


const sumar = () => {
  const num1 = Number(prompt('Introduce el primer sumando'))
  const num2 = Number(prompt('Introduce el segundo sumando'))
  console.log(num1 + num2)
}

const restar = () => {
  const num1 = Number(prompt('Introduce el minuendo'))
  const num2 = Number(prompt('Introduce el sustraendo'))
  console.log(num1 - num2)
}

const multiplicar = () => {
  const num1 = Number(prompt('Introduce el multiplicando'))
  const num2 = Number(prompt('Introduce el multiplicador'))
  console.log(num1 * num2)
}

const dividir = () => {
  const num1 = Number(prompt('Introduce el dividendo'))
  const num2 = Number(prompt('Introduce el divisor'))
  console.log(num1 / num2)
}
const exponencial = () => {
  const num1 = Number(prompt('Introduce un número'))
  const num2 = Number(prompt('Introduce la potencia'))
  console.log(num1 ** num2)
}

const porcentaje = () => {
  const num1 = Number(prompt('Introduce un número'))
  const num2 = Number(prompt('Introduce el tanto por ciento'))
  console.log(num1 * (num2 / 100))
}


let opcion = 'x'
do {
  opcion = prompt('Elige una de las siguientes opciones:(s) sumar, (r) restar, (m) multiplicar, (d) dividir, (e) exponencial, (p) porcentaje y (x) salir. ')
  switch (opcion) {
  case 's':
    sumar()
    break
  case 'r':
    restar()
    break
  case 'm':
    multiplicar()
    break
  case 'd':
    dividir()
    break
  case 'e':
    exponencial()
    break
  case 'p':
    porcentaje()
    break
  }
} while (opcion !== 'x')
