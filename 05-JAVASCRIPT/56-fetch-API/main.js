const parrafoQuijote = document.querySelector('.quijote')
const movieList = document.querySelector('.movie-list')
const pokeInput = document.querySelector('.poke-input')
const pokeBtn = document.querySelector('.poke-btn')


//? Fetch

//* pedir un texto plano

// fetch('./assets/quijote.txt')
//   .then((objRespuestaServidor) => {
//     objRespuestaServidor.text().then((queEsEsto) => { console.log(queEsEsto) })
//   })

//! el segundo then() SOLO FUNCIONA SI EL ANTERIOR RETORNA UNA PROMESA
fetch('./assets/quijote.txt')
  .then((objRespuestaServidor) => {
    return objRespuestaServidor.text()
  })
  .then((queEsEsto) => { console.log(queEsEsto) })


fetch('./assets/quijote.txt')
  .then((objRespuestaServidor) => objRespuestaServidor.text())
  .then((datos) => { parrafoQuijote.innerText = datos })
  .catch((err) => console.error(err))

//* ========================================== *//

//* pedir un .json


fetch('./assets/peliculas.json')
  .then((resp) => resp.json())
  .then((data) => {
    // aquí sé seguro que tengo los datos del servidor
    printMovies(data)
  })
  .catch((err) => console.error(err))


const printMovies = (movies) => {
  movies.forEach(movie => {
    const li = document.createElement('li')
    li.innerText = movie.titulo
    movieList.append(li)
  })
}


//* Pedir datos de un servidor

let posts = []

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(resp => resp.json())
  .then(data => {
    posts = data
    // console.log(posts)
  })
  .catch(err => console.error(err))


//* Pedir datos a un servidor segun una "query"

const printPokeImage = (pokemon) => {
  const image = document.createElement('img')
  image.src = pokemon.sprites.front_default
  image.alt = pokemon.name

  pokeBtn.after(image)
}


const getPokemon = () => {

  const pokemonQuery = pokeInput.value.trim()
  if (!pokemonQuery) return

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonQuery}`)
    .then(resp => {
      if (resp.status === 404) throw new Error('No se ha encontrado el pokemon ' + pokemonQuery)
      return resp.json()
    })
    .then(pokemon => {
      printPokeImage(pokemon)
    })
    .catch(err => console.warn(err))
}

pokeBtn.onclick = () => getPokemon()


//* Métodos (verbo) típicos que usamos para mover datos con el protocolo HTTP

//? GET --> Para OBTENER datos
//? POST --> Para enviar datos
//? DELETE --> Para borrar datos
//? PUT --> Para actualizar datos ENTEROS
//? PATCH --> Para actualizar PARTES DE DATOS
