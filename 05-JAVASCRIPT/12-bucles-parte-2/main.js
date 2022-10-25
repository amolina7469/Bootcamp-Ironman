// ? Bucles - Parte II

// * while --> Mientras se cumpla una condición... sigue dando vueltas
// * Se usa cuando no sabemos el número de vueltas

/*
while (condicion sea true) {
  haz esto
}
*/

let i = 1
while (i <= 5) {
  console.log(i)
  i++
}


// Ejemplo donde solemos usar while
let frase = null
while (frase === null || frase.trim() === '') {
  frase = prompt('Dime una frase')
}

console.log(frase)


// *===============================*/

// * do....while  --> Primero ejecuta y luego pregunta la condición

let miFrase

do {
  miFrase = prompt('Dime una frase')
} while (miFrase === null || miFrase.trim() === '')

console.log(miFrase)

//* Cuando usar un bucle o otro

/*
  * Si sabes el número de vueltas
FOR...
  -Cuando quieres repetir un código un número determinado de veces
  -Cuando quieres recorrer un array o string y no quieres empezar desde el principio o quieres ir de 2 en 2,...

FOR ...OF...
  -Cuando quieres recorre un array o string
  */

//* EXTRA!! Comprobar si un valor es un número o no
// isNaN() -> Devuelve true si lo de dentro se puede considerar un número y false si no.

// isNaN() --> True significa que no es un número, es decir si es un "Not a Number" (NaN)
// isNaN() --> False significa que si consider que es un número, es decir no es un "Not a Number" (NaN)
