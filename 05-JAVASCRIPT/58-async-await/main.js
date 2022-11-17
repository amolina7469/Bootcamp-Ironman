const API_KEY = '594939a196832017634a0d7b0271311b'


const getMovies = (movie) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie}&language=es`

  fetch(url)
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
}

getMovies('Harry Potter')


//* con async await
const getMoviesAsyncAwait = async (movie) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie}&language=es`

  const resp = await fetch(url)
  const data = await resp.json()

  console.log(data)

}

getMoviesAsyncAwait('Matrix')


//* Para poder usar el catch() en un async await, necesitamos la estructura de JavaScript  try...catch()

const sumarSoloPares = (num1, num2) => {
  if (num1 % 2 !== 0 || num2 % 2 !== 0) {
    throw new Error('Tienen que ser pares')
  }
  return num1 + num2
}


try {

  // como uno de los dos es impar, directamente lanza el error y salta automáticamente al catch, sin seguir ejecutándose
  const resultado = sumarSoloPares(2, 3)
  console.log(resultado)

} catch (error) {
  console.error(error)
}


const getPokemon = async (pokemon) => {
  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    if (resp.status === 404) throw new Error('Pokemon no encontrado')

    const data = await resp.json()

    console.log(data)

  } catch (err) {
    console.error(err)
  }


}
getPokemon('mew')
