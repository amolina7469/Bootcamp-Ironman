import createAlertVanilla from './helpers/createAlertVanilla.js'

const form = document.querySelector('.main-form')
const pokemonInfo = document.querySelector('.pokemon-info')

const getPokemon = (event) => {
  event.preventDefault()
  const query = form.pokemonName.value

  if (!query) {
    createAlertVanilla('No puedes dejar el campo vacío')
    return
  }

  fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
    .then(resp => {
      if (resp.status === 404) {
        throw new Error('No se ha encontrado el pokemon: ' + query)
      }
      return resp.json()
    })
    .then(pokemon => {  
      printPokemon(pokemon)
    })  
    .catch(err => createAlertVanilla(err))
}

const getPokemonAsync = async (event) => {
  event.preventDefault()
  const query = form.pokemonName.value

  if (!query) {
    createAlertVanilla('No puedes dejar el campo vacío')
    return
  }

  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
      
    if (resp.status === 404) {
      throw new Error('No se ha encontrado el pokemon: ' + query)
    }
    
    const pokemon = await resp.json()
    printPokemon(pokemon)
  } catch (err) {
    createAlertVanilla(err.message)
  }
}

const printPokemon = (pokemon) => {  
  const pokemonMarkup = document.createElement('article')
  pokemonMarkup.className = 'pokemon'

  pokemonMarkup.innerHTML = `
  <img class="pokemon__image" src="${pokemon.sprites.front_default}">
  <h2 class="pokemon__name">${capitalize(pokemon.name)} - Nº<span>${pokemon.order}</span></h2>
  <ul>
    <li>Altura: <span>${pokemon.height}</span>cm</li>
    <li>Peso: <span>${pokemon.weight}</span>g</li>
    <li>Tipo: <span>${capitalize(pokemon.types[0].type.name)}</span></li>
  </ul>
  `

  pokemonInfo.prepend(pokemonMarkup)
}

const capitalize = (text) => {
  return text.slice(0,1).toUpperCase() + text.slice(1)
}



// form.addEventListener('submit', (event) => getPokemon(event))
form.addEventListener('submit', (event) => getPokemonAsync(event))
