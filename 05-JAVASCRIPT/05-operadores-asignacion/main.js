//? Operadores de asignación
// asignar es dar un nuevo valor a una variable


//*    =  -->   Asigna y reasigna de forma normal

let nombre = 'Ivan'
nombre = '🐕'

//* ========================================== *//

//*    +=  -->  Asigna un nuevo valor SUMANDO lo de la derecha

let numero = 1
console.log(numero) // 1

        //  1   + 2
numero = numero + 2
console.log(numero) // 3


numero += 1
console.log(numero)

//! Ojo que el += también asigna así que te dará error si lo haces con una constante
const edad = 35
// edad += 2   //! error

//? En ocasiones queremos sumar un string con otro, pues también podemos usar el += para hacerlo

let libro = 'Harry Potter'
libro = libro + ' y la piedra filosofal' // esto
libro += ' y la piedra filosofal' // y esto es lo mismo

//* ========================================== *//


//* Ocurre exactamente lo mismo con todos los demás operadores matemáticos

  //* numero += 2  -->   numero = numero + 2
  //* numero -= 2  -->   numero = numero - 2
  //* numero *= 2  -->   numero = numero * 2
  //* numero /= 2  -->   numero = numero / 2
  //* numero %= 2  -->   numero = numero % 2


//? Operadores de incremento y decremento

//* Básicamente es exactamente lo mismo que hemos hecho con el += o el -= PERO SOLO SIRVE SI QUEREMOS HACER SUMAS O RESTAS DE 1 EN 1
//! Ojo porque también cambia el valor de la variable

let num = 50
num = num + 1 // 51
num += 1 // 52
num -= 1 // 51

num++ // 52
num++ // 53
num++ // 54
num-- // 53
num-- // 52

// puedes hacerlo también así, la diferencia es que con el ++ delante PRIMERO CAMBIA LE VALOR de la variable y LUEGO TE MUESTRA LA VARIABLE
++num // 53

console.log(num)
