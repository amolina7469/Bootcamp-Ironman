// ? Métodos Arrays y Math 01.===================================================================================

// Crea 3 arrays:
// El primero tendrá 5 números.
// El segundo se llamará pares y el tercero impares . Ambos estarán vacíos.
// Multiplica cada uno de los números del primer array por un número aleatorio
// entre 1 y 10:
// Si el resultado es par, guarda ese número en el array de pares y si es impar
// en el otro.
// Mostrar por consola:
// La multiplicación que se ha hecho en el siguiente formato -> 2 x 3 = 6
// El array de pares e impares.

// const numeros = [1, 2, 3, 4, 5]
// const pares = []
// const impares = []
// const numAleatorio = Math.floor(Math.random() * (10 - 1 + 1) + 1)

// for (let i = 0; i < numeros.length; i++) {
//   const resultado = numeros[i] * numAleatorio
//   if (resultado % 2 === 0) {
//     pares.push(resultado)
//     console.log(`${numeros[i]} x ${numAleatorio} = ${resultado}`)
//   } else {
//     impares.push(resultado)
//     console.log(`${numeros[i]} x ${numAleatorio} = ${resultado}`)
//   }
// }
// console.log(pares)
// console.log(impares)

// ? Métodos Arrays y Math 02.=================================================================================

// Pide al usuario 5 números distintos y los guardas en un array a medida que los vaya
// escribiendo.
// Imprime el array por consola.
// Cuando acabe, suma el total de todos los números.
// Imprime en consola la suma total, la raíz cuadrada del total y también éste
// último pero redondeado al alta.

// const numArray = []
// let resultado = 0
// for (let i = 0; i < 5; i++) {
//   numArray[i] = prompt('Introduce un número:')
// }
// console.log(numArray)

// for (let i = 0; i < 5; i++) {
//   resultado += Number(numArray[i])
// }
// console.log(resultado)


// ? Métodos Arrays y Math 03.=================================================================================

// Crea un array vacío y rellénalo con 10 números aleatorio entre 23 y 33 (ambos
//   incluidos).
//   Luego elimina del array todos los números pares y en lugar de ellos ponemos el
//   string "los impares molan" .

// const arrayVacio = []

// for (let i = 0; i < 10; i++) {
//   // arrayVacio[i] = Math.floor(Math.random() * (33 - 23 + 1) + 23)
//   arrayVacio.push(Math.floor(Math.random() * (33 - 23 + 1) + 23))
// }
// console.log(arrayVacio)

// for (let i = 0; i < 10; i++) {
//   if (arrayVacio[i] % 2 === 0) {
//     arrayVacio.splice(i, 1, 'Los impares molan')
//   }
// }
// console.log(arrayVacio)


// ? Métodos Arrays y Math 04.=================================================================================

// Pide al usuario por teclado una frase y pasa sus caracteres a un array de caracteres.
// Elimina todas las vocales de la frase y imprime la nueva frase por consola como un
// string.

// const frase = prompt('Introduce una frase')
// const arrayFrase = frase.split('')


// for (let i = 0; i < frase.length; i++) {
//   if (arrayFrase[i] === 'a' || arrayFrase[i] === 'e' || arrayFrase[i] === 'i' || arrayFrase[i] === 'o' || arrayFrase[i] === 'u' || arrayFrase[i] === 'A' || arrayFrase[i] === 'E' || arrayFrase[i] === 'I' || arrayFrase[i] === 'O' || arrayFrase[i] === 'U') {
//     arrayFrase.splice(i, 1)
//     i--
//   }
// }

// console.log(arrayFrase.join(''))


// ? Bucles 10. ===============================================================================================

// Recorrer la siguiente lista con un bucle, imprimiendo el doble de cada número:

// const myList = [1, 9, 3, 8, 5, 7]

// for (let i = 0; i < myList.length; i++) {
//   const resultado = myList[i] * 2
//   console.log(resultado)
// }

// FOR OF:
// const myList = [1, 9, 3, 8, 5, 7]
// for (const num of myList) {
//   console.log(num * 2)
// }

// FOR IN:
// const myList = [1, 9, 3, 8, 5, 7]
// for (const i in myList) {
// console.log(myList[i] * 2)
// }

// ? Bucles 11. ================================================================================================

// En un array cualquiera con 10 números, contar cuantos números positivos hay,
// cuantos negativos y cuantos ceros.

// const arrayRandom = []
// let positivo = 0
// let negativo = 0
// let ceros = 0

// for (let i = 0; i < 10; i++) {
//   arrayRandom.push(Math.floor(Math.random() * (99 - (-99) + 1) + (-99)))
// }
// console.log(arrayRandom)

// for (let i = 0; i < arrayRandom.length; i++) {
//   if (Math.sign(arrayRandom[i] > 0)) {
//     positivo++
//   } else if (Math.sign(arrayRandom[i] < 0)) {
//     negativo++
//   } else {
//     ceros++
//   }
// }
// console.log(`En el array hay ${positivo} números positivos, ${negativo} números negativos y ${ceros} ceros`)

 // ? Bucles 06. ================================================================================================

// for (let i = 1; i <= 10; i++) {
//   for (let j = 0; j <= 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`)
//   }
// }


  // ? Bucles 09. ================================================================================================

// let estrellas = ''
// let i = 0
// const vueltas = 7

// while (i < vueltas) {
//   console.log(estrellas += '*')
//   i++
// }

// Opción método repeat

// const estrellita = '*'
// for (let i = 1; i <= 7; i++) {
//   console.log(estrellita.repeat(i))
// }

// ? Bucles 13. ==================================================================================================

const numeroSecreto = Math.floor((Math.random() * 100) + 1)
// console.log(numeroSecreto)
let intentos = 0
let numeroUser = parseInt(prompt('Introduce un número del 1 al 100'))


for (let i = 5; i > 0; i--) {
  if (numeroSecreto === numeroUser) {
    // console.log(`Enhorabuena el número secreto era ${numeroSecreto} !!!`)
    alert(`Enhorabuena el número secreto era ${numeroSecreto} !!! 🎉🥳`)
    i = -1
  } else if (numeroSecreto < numeroUser) {
    numeroUser = parseInt(prompt(`El número introducido es mayor. Introduce un número menor. Te quedan ${i} intento(s)`))
    intentos++
  } else {
    numeroUser = parseInt(prompt(`El número introducido es menor. Introduce un número mayor. Te quedan ${i} intento(s)`))
    intentos++
  }
}

if (intentos === 5) {
  // console.log('Lo siento no has adivinado el número')
  alert(`Lo siento no has adivinado el número. El número secreto era ${numeroSecreto} !!!`)
}

// ? Bucles 12. ==============================================================================================

// const numero = Number(prompt('Introduce un número mayor que 1:'))
// let esPrimo = true
// if (numero > 1) {
//   for (let i = 2; i < numero; i++) {
//     if (numero % i === 0) {
//       esPrimo = false
//       break
//     }
//   }
//   if (esPrimo) { // Esto quiere decir que es "esPrimo === true". No es primo sería "!esPrimo"
//     console.log('Es primo')
//   } else {
//     console.log('No es primo')
//   }
// }
