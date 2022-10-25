/* eslint-disable eqeqeq */
/* eslint-disable space-infix-ops */

// //* Bucles 01

for (let i=3; i<=30; i+=3) {
  console.log(i)
}

// //* Bucles 02
let resultado
for (let i=1; i<= 10; i++) {
  resultado = (8*i)
  console.log(`8 x ${i} =`, resultado)
}

// //* Bucles 03

for (let i=1; i<=20; i++) {
  if (i%2 === 0) {
    console.log(`${i} es un número par`)
  } else {
    console.log(`${i} es un número impar`)
  }
}

//* Bucles 04

const frase=prompt('Introduce una frase:')
const caracter=prompt('Introduce le caracter a buscar:')
let contador=0

for (let i=0; i<=frase.length; i++) {
  if (frase[i] == caracter) {
    contador++
  }
}
console.log(contador)

// for (const letra of frase) {
//   if (letra.toLowerCase)
// }

//* Bucles 05

for (let i = 1; i <= 50; i++) {
  if ((i % 3 === 0) && (i % 5 === 0)) {
    console.log('FizzBuzz')
  } else if (i % 5 === 0) {
    console.log('Buzz')
  } else if (i % 3 === 0) {
    console.log('Fizz')
  } else {
    console.log(i)
  }
}
