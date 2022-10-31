//? OPERADORES MATEMÁTICOS
const num1 = 10
const num2 = 5

//* Sumar

const suma = 5 + 3 + 6 + 9
console.log(suma)

const suma2 = num1 + num2
console.log(suma2)

// El operdor de suma tambien sirve para concatenar textos

console.log('Hola ' + 'Mundo')

//! si hay string en la suma intenta convertir el otro en string
console.log(2 + 2) // 4
console.log(2 + '2') // '22'
console.log(true + true) // true es 1
console.log(true + false) // true es 1
console.log(false + false) // false es 0
console.log(null + 3) // null es 0
console.log(undefined + 3) // el reusltado es Not a Number (NaN)


//* restar


const resta = num1 - num2
console.log(resta)

//! Cosas raras cuando restamos. El signo menos intenta convertir el otro elemento en un numero
console.log(5 - 3) // 2
console.log('5' - 3) // 2
console.log('5' - '3') // 2
console.log(5 - true) // 4
console.log(5 - undefined) // NaN
console.log(5 - 'hola') // NaN


//* Multiplicar

const multiplicacion = num1 * num2
console.log(multiplicacion)

const potencia = 5 ** 2
console.log(potencia)

//* División

const division = num1 / num2
console.log(division)


console.log(10 / 3)

const divisionInexacta = 11 / 3

console.log(divisionInexacta)
console.log(divisionInexacta.toFixed(3))//! OJO!!! CON tofixed CONVERTIMOS EL NUMERO EN UN STRING
console.log(divisionInexacta.toFixed(2))

//* Módulo --> % --> Devuelve el resto cuando un numero se divide entre otro


console.log('=========================================')
console.log(10 % 3)
console.log(100 % 7)
// para saber si es par o impar hacemos el modulo de 2

//* ===============================================================================*/


// parseInt()  --> transfoma lo que sea a un número

console.log(parseInt('5.5555'))

// parseFloat()  --> transfoma lo que sea a un decimal

console.log(parseFloat('5.5555'))

// Number() --> transforma lo que sea a número

console.log(Number('5.5555'))
