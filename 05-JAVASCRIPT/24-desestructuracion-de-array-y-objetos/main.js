// ? Desestructuración
// * De Arrays
const frutas = ['🍎', '🍌', '🍍', '🥭', '🍊', '🍉']

const apple = frutas[0]
const banana = frutas[1]
console.log(apple, banana)

const [manzana, platano, piña] = frutas
console.log(manzana, platano, piña)

// ! Normas de la desestructuración de arrays
// * Se van a guardar los valores del array en el orden que tienen
// * Es decir da igual el nombre que le pongas a la variable, lo más importante es el orden en que las creas
// manzana --> '🍎'

// * Si no queremos guardar un elemento y lo queremos saltar tenemos que dejar el hueco separado por comas

const [, , , , naranjas] = frutas
console.log(naranjas)

// ? Caso práctico

const pedirDosNumeros = () => {
  const num1 = +prompt('Dime un número')
  const num2 = +prompt('Dime otro número')

  return [num1, num2] // [5, 2]
}
// versión normal y corriente
// const arrDosNums = pedirDosNumeros() // [5, 2]
// const num1 = arrDosNums[0] // 5
// const num2 = arrDosNums[1] // 2

// versión desestructurada
// const arrayNums = pedirDosNumeros()
// const [a, b] = arrayNums

// versión desestructurada más corta

// const [x, y] = pedirDosNumeros()


// console.log(x + y) // 5 + 2

// * ======================================== *//

// * De objetos

const sandia = {
  nombre: 'sandia',
  cantidad: 5,
  emoticono: '🍉',
  procendecia: 'Almeria',
  dulzor: 3
}

// version normal
const nombre = sandia.nombre
const emoticono = sandia.emoticono
console.log(nombre, emoticono)

// desestructurando
const { procedencia, dulzor, cantidad } = sandia


console.log(`La ${sandia.nombre} es una fruta que viene de ${sandia.procedencia} y ahora mismo me quedan ${sandia.cantidad} en stock. Son super dulces, tienen un dulzor de nivel ${sandia.dulzor}. ¿Quieres sandías? ${sandia.emoticono}`)

// version corta
console.log(`La ${nombre} es una fruta que viene de ${procedencia} y ahora mismo me quedan ${cantidad} en stock. Son super dulces, tienen un dulzor de nivel ${dulzor}. ¿Quieres sandías? ${emoticono}`)

//! NORMAS DE LA DESESTRUCTURACIÓN DE OBJETOS
//* NO IMPORTA EL ORDEN EN QUE CREES LAS VARIABLES, LO IMPORTANTE SON LOS NOMBRES

//* como EXTRA, podemos ponerle un "alias" a las variables que desestructures

const { emoticono: icono } = sandia

console.log(icono)


// * ======================================== *//
// * ======================================== *//
// * ======================================== *//

// * Ejercicio
const luke = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'https://swapi.dev/api/planets/1/',
  films: [
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/6/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/7/'
  ],
  species: [
    'https://swapi.dev/api/species/1/'],
  vehicles: [
    'https://swapi.dev/api/vehicles/14/',
    'https://swapi.dev/api/vehicles/30/'],
  starships: [
    'https://swapi.dev/api/starships/12/',
    'https://swapi.dev/api/starships/22/'],
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  url: 'https://swapi.dev/api/people/1/'
}

// desetructurar las propiedades edited films y  hir_color y las guardais con los nombres edited films y pelo

const { edited, films, hair_color : pelo } = luke

// imprime los 3 valores
console.log(edited)
console.log(films)
console.log(pelo)
// como films es un array desestructurar la primera peli, la segunda y la cuarta

const [peli1, peli2, , peli4] = films
console.log(peli1, peli2, peli4)
