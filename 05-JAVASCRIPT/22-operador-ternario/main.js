// ? Operador ternario

// * Tiene 2 funciones
// * 1. Es un if..else pero más corto
// ! Yo no usaria casi nunca un ternario en vez de un if...else para ejecutar algo de código
// ! Si lo usas , sólo puedes ejecutar una cosa

const edad = 25
const genero = 'mujer'

if (edad >= 18) {
  console.log('Mayor de edad')
} else {
  console.log('Menor de edad')
}
// con un operador ternario
edad >= 18
  ? console.log('Mayor de edad')
  : console.log('Mayor de edad')

edad >= 18
  ? genero === 'mujer'
    ? console.log('Eres una mujer mayor de edad')
    : console.log('Eres un hombre mayor de edad')
  : genero === 'mujer'
    ? console.log('Eres una niña')
    : console.log('Eres un niño')

// * 2. Se utiliza en el sitio donde vayas a poner una expresión, es decir, allá donde lo pongas, todo el ternario valdrá un valor u otro según una condición

const miEdad = 24
let esMayorDeEdad

if (miEdad >= 18) {
  esMayorDeEdad = true
} else {
  esMayorDeEdad = false
}

// ? ternario como valor de una variable

const esMayor = miEdad >= 18 ? 'Soy mayor' : 'Soy menor'
console.log(esMayor)

// ? Como parte de un texto que tomara un valor u otro
console.log(`Eres ${miEdad >= 18 ? 'mayor' : 'menor'}`)

// ? En el return de una función

const esPar = (numero) => {
  if (numero % 2 === 0) {
    return true
  } else {
    return false
  }
}

const esParTernario = (numero) => {
  return numero % 2 === 0 ? true : false
}

console.log(esPar(4))
console.log(esPar(5))
console.log(esParTernario(4))
console.log(esParTernario(5))
