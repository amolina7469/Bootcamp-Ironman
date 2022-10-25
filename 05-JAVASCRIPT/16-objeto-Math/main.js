//? Objeto Math

// * Propiedades
console.log(Math.PI) // Número Pi
console.log(Math.E) // Número de Euler
console.log(Math.SQRT2) // Raíz cuadrada de 2


// * Métodos
// raiz caudarda de un número
console.log(Math.sqrt(144))

// potencia de un número
console.log(Math.pow(5, 2))

// redondear un número
console.log(Math.round(5.7)) // 6
console.log(Math.round(5.2)) // 5
console.log(Math.round(5.5)) // 6

// Redondeo siempre al alza --> el de los intereses

console.log(Math.ceil(5.7))// 6
console.log(Math.ceil(5.2))// 6
console.log(Math.ceil(5.5))// 6

// Redondeo siempre a la baja --> el de las nóminas

console.log(Math.floor(5.7))// 5
console.log(Math.floor(5.2))// 5
console.log(Math.floor(5.5))// 5

// Número más grande de una lista de números
console.log(Math.max(5, 13, -15, 7))// 13

// Número más pequeño de una lista de números
console.log(Math.min(5, 13, -15, 7))// -15

// *Truquito: En max y min sólo se pueden poner números sueltos, no puede ser un array
console.log(Math.max([5, 13, -15, 7])) //! Error NaN

const numeros = [1, 5, 14, -7, 3]
console.log(Math.max(...numeros))// 14

// *================================================*/

// * Truco para tener un número aleatorio
console.log(Math.random()) // Número aleatorio de 0 al 1
console.log((Math.random()) * 10) // Número aleatorio de 0 al 10 con decimales
console.log(Math.ceil(Math.random()) * 10) // Número aleatorio de 0 al 10 sin decimales

// *Número aleatorio del 1 al 10, o al 100, o al 1000, ... --> Math.ceil(math.random()*100)


// * Número aleatorio de un "min" a un "max" ambos inclusive

Math.floor(Math.random() * (max - min + 1) + min);
