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
console.log(nombre)


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
