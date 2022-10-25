// * Bucles 07.

//? Escribe un programa que pida al usuario introducir un número entero entre 50 y
//? 100, el cuadro de texto volverá a aparecer si el número es menor o mayor.

let numero = 0

do {
  numero = prompt('Escribe un número entero entre 50 y 100:')
} while (numero === null || numero.trim() === '' || numero < 50 || numero > 100 || isNaN(numero) === true)

console.log(numero)

//* Bucles 08.

//? En primer lugar se le pedirá al usuario que introduzca un número entre 2 y 10. Si el
//? número no está entre estos dos valores, se le seguirá pidiendo hasta que introduzca
//? el valor correcto. Una vez haya introducido un valor entre 2 y 10, se mostrará por
//? consola la tabla de multiplicar del número elegido.


let miNumero = 0

do {
  miNumero = prompt('Escribe un número entero entre 2 y 10:')
} while (miNumero === null || miNumero.trim() === '' || miNumero < 2 || miNumero > 10 || isNaN(miNumero) === true)


for (let i = 1; i <= 10; i++) {
  console.log(`${miNumero} x ${i} = ${miNumero * i}`)
}

