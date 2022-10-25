//? Bucles

//* Estructura que repite un código un número determinado de veces

//* Se usan para:
  //* 1. Para repetir el código un numero de veces
  //* Para recorrer elementos (cada uno de sus valores)

// *============================================*//

//* Bucle for...

// Su sintaxis tiene 3 partes

// 1. Inicializar variable
// 2. Condición que determina el número de veces que se repite
// 3. Contador: incrementar o decrementar variable

for (let i = 0; i < 10; i++) {
  console.log('Soy un bucle for', i)
}

for (let i = 5; i > 0; i--) {
  console.log('Soy un bucle for hacia abajo', i)
}

// *============================================*//

// * Lo más común en bucles es recorrer un elemento "ITERABLE" (strings, arrays,....)

// Array

const frutas = ['🥝', '🥥', '🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🥭']

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i])
}

// String

const texto = 'con cien cañones por banda...'

for (let i = 0; i < texto.length; i++) {
  console.log(texto[i])
}

// Ejemplo: cada letra del texto la transformas en mayúsculas y la pones en un nuevo array

const arrayLetras = []

for (let i = 0; i < texto.length; i++) {
  if (i % 2 === 0) {
    arrayLetras[arrayLetras.length] = texto[i].toUpperCase()
  } else {
    arrayLetras[arrayLetras.length] = texto[i].toLowerCase()
  }
}
console.log(arrayLetras)

// *=====================================================*//
// Con el siguiente array:

const fruteria = ['🍒', '🍊', '🍉', '🥑']
// imprimir en consola lo siguiente:
    //   "Fruta 1: 🍒"
    //   "Fruta 2: 🍊"
    //   "Fruta 3: 🍉"
    //   ...

for (let i = 0; i < fruteria.length; i++) {
  console.log('Fruta', i + 1, ': ', fruteria[i])
}
// guardar en un nuevo array solo las frutas que esten con el índice impar

const frutasPares = []

for (let i = 0; i < fruteria.length; i++) {
  if (i % 2 !== 0) {
    frutasPares[frutasPares.length] = fruteria[i]
  }
}
console.log(frutasPares)


// en un array de números como este:
const nums = [5, 13, 23, 40, 55]


// cambiar el valor de cada número sumándole 5  --> [10, 18, 28,45 ,60]

for (let i = 0; i < nums.length; i++) {
  // nums[i]+=5 versión corta
  nums[i] = nums[i] + 5
}

console.log(nums)

// *==========================================*//

//* BREAK, CONTINUE -->Podemos utilizarlos para salir del bucle o saltarnos una vuelta

console.log('****BREAK****')

for (let i = 1; i <= 5; i++) {
  console.log(i)
  if (i === 3) {
    break // Sale del bucle completamente
  }
}
console.log('Fuera del bucle')


console.log('****CONTINUE****')

for (let i = 1; i <= 5; i++) {
  console.log(i)
  if (i === 3) {
    continue // Se salta una vuelta
  }
}
console.log('Fuera del bucle')

// *==============================================*//

// *for of --> No requiere tantos valores iniciales

//! Siempre empieza en 0
//! Siempre llega hasta el final
//! Siempre va de uno en uno

console.log('******FOR...OF*******')

const misfrutas = ['🥝', '🥥', '🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🥭']
const misNumeros = [7, 14, -13, 22]

for (const fruta of misfrutas) {
  console.log(fruta)
}

for (const num of misNumeros) {
  console.log(num)
}

// *==============================================*//

// *for in --> Igual que for...of pero sólo nos dará los índices
  // Este es más útil para recorrer objetos

for (const indice in misfrutas) {
  console.log(indice)
}


