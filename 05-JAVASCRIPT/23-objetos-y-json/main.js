// ? Object --> Nos da la posibilidad de guardar varios datos que hacen referencia a una misma cosa, un mismo "ente"

// * Vamos a crear un objeto de forma literal -->{}
// ! Los objetos simpre funcionan por pares (llave: valor) (propiedad: valor) (KEY: VALUE)

// ? Los objetos pueden guardar 2 tipos de información
 // * Propiedades: Son como variables(📦) que guardan dentro lo que quieras

const platano = {
  color: 'amarillo',
  procedencia: 'Canarias',
  tieneMotitas: true,
  precio: 2.3,
  tiendas: ['Mercadona', 'Lidl', 'Carrefour'],
  sabor: {
    dulzor: 3,
    salado: 0,
    amargo: 1
  }
}
console.log(platano)

// * Métodos: Son funciones que se guardan dentro del objeto y hacen que este tenga funcionalidad propia. No se puede acceder a la función desde fuera.

const coche = {
  marca: 'Opel',
  modelo: 'Zafira',
  puertas: 5,

  arrancar: () => {
    console.log('ruuunnn!! 🚗')
  }
}
console.log(coche)

// * ======================================== *//

// * Con los arrays usabamos los []
const nums = [2, 15, -13, 23, 75, 4, 12]
console.log(nums[2]) // -13

// * Con los objetos usamos el '.'
console.log(platano.color) // amarillo
console.log(coche.modelo) // zafira

// Cómo accedemos a la tercera  fruteria de las tiendas de platanos ?
console.log(platano.tiendas[2])


// De la misma forma podemos acceder a una función -->método
coche.arrancar()

// Podemos usarlos igual que los arrays, strings,...
console.log(platano.tiendas.splice(1, 2))


// * Otra manera "rara"  de acceder a una propiedad de un objeto
const libro = {
  paginas: 250,
  titulo: 'Harry Potter',
  'el autor': 'J.K.Rowling'
}
console.log(nums[3])
console.log(libro.titulo)
console.log(libro['titulo']) // es mejor escribirlo como en el ejemplo anterior
console.log(libro['el autor']) // aquí si necesitarias los corchetes sin más remedio

// Dependiendo de lo que pasemos a dato imprimira páginas, o título, o lo que sea. Así usaremos la propiedad que necesitamos
const dato = 'paginas'
console.log(libro[dato])

// * Si intentas usar una propiedad que no existe te dará undefined
console.log(libro.editorial)


// * ======================================== *//
// * Modificar valores de un objeto creado

// Podemos añadir directamente una propiedad que no exista

libro.editorial = 'Salamandra'
console.log(libro)

// Podemos cambiar una propiedad exixtente

libro.paginas = 275
console.log(libro)

// Eliminar una propiedad
delete libro['el autor']
console.log(libro)

// * ======================================== *//

// * Recorrer un objeto

// * for..in

for (const indice in platano) { // Aquí imprimimos los indices del objeto
  console.log(indice)
}

for (const propiedades in platano) { // Aquí las propiedades
  console.log(platano[propiedades])
}

for (const propiedades in platano) { // Aquí los indices seguido de sus propiedades
  console.log(propiedades, platano[propiedades])
}

// * ======================================== *//
// * Ejercicio:

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

// Imprimir en consola:
/*
"Nombre: Luke Skywalker"
"Altura: 172"
*/
// cambiad el color de pelo de "blond" a "brown"
// Listad en consola las "url" de las películas en las que sale
/*
 "Peli 1: https://swapi.dev/api/films/2/"
 "Peli 2: https://swapi.dev/api/films/4/"
 */
// Imprime en consola el color de ojos usando los corchetes para llamar a la propiedad "eye_color"

console.log('=================================================')

console.log('Nombre: ' + luke.name)
console.log('Altura : ' + luke.height)
luke.hair_color = 'brown'
console.log(luke)

for (let i = 0; i < luke.films.length; i++) {
  console.log(`Peli ${i + 1}: ` + luke.films[i])
}

console.log(luke['eye_color'])


