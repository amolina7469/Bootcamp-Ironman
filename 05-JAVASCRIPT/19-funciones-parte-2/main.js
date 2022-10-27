//? Funciones  - Parte 2


function sumar (num1, num2) {
  const resultado = num1 + num2
  console.log(resultado)
}

sumar(5, 4)

sumar = '🌰'
// hemos cambiado el valor de la funcion
console.log(sumar)


// * Prara solucionarlo utilizamos las funciones anónimas

const restar = function (num1, num2) {
  console.log(num1 - num2)
}

console.log(restar)
// restar = '🍣' //! No me deja porque es una constante
console.log(restar)

restar(5, 1) // 4

// *==============================================================================================*//
// *==============================================================================================*//
// * A partir de ECMAScript 6 se crearon las funciones flecha ("ARROW FUNCTIONS")

// ? Función anónima clásica
// function () {}

// ? Función anónima de flecha
//  () => {}

function saludo (nombre) {
  console.log('Hola ' + nombre)
}

const saludo2 = function (nombre) {
  console.log('Hola ' + nombre)
}
const saludo3 = (nombre) => {
  console.log('Hola ' + nombre)
}


// *==============================================================================================*//
// * Si sólo tiene un parametro, podemos quitar los paréntesis

const saludo4 = nombre => { // Esto lo uso alguna vez
  console.log('Hola ' + nombre)
}

// * Si no tiene ningún parametro, podemos poner un guió bajo

const saludo5 = _ => { // Esto lo uso alguna vez
  console.log('Hola ' + nombre)
}

// * Si sólo tiene una línea de ejcucción podemos quitar las llaves

const saludo6 = (nombre) => console.log('Hola ' + nombre)


// *==============================================================================================*//
// *==============================================================================================*//

// ! En las funciones tipo flecha no podemos ejecutarlas antes de inicializarse

// saludo8('Ivan') //! No puedes
saludo9('Carlos')
const saludo8 = (nombre) => console.log('Hola ' + nombre)
function saludo9 (nombre) { console.log('Hola ' + nombre) }

/*
  RESUMEN DE LAS FUNCIONES

  Apartir de ahora usaremos siempre que podamo ARROW FUNCTIONS

  Pueden recibir parámetros, pero no es obligatorio

  Podemos ponerle valores por defecto con un igual (nombre = 'Ivan')

  Hay que invocarlas/ejecutarlas para que se ejecute el código

  */

