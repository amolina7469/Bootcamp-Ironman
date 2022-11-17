const pokeInput = document.querySelector('.poke-input')
const pokeBtn = document.querySelector('.poke-btn')
const pokeData = document.querySelector('.poke-data')
console.log(pokeBtn)

pokeBtn.onclick = () => getPokemon()


// const getPokemon = () => {
//   const pokemon = pokeInput.value
//   console.log(pokemon)

//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
//     .then(response => response.json())
//     .then(pokemon => { printPokemon(pokemon) })
//     .catch(error => console.error(error))
// }

const getPokemon = async () => {
  try {
    const pokemon = pokeInput.value
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    const data = await response.json()
    console.log(data)
    printPokemon(data)
  } catch {
    console.log('error')
  }
}


const printPokemon = (pokemon) => {
  const image = document.createElement('img')
  image.src = pokemon.sprites.front_default
  // image.src = pokemon.sprites.other.'official-artwork'
  const name = document.createElement('h2')
  name.innerText = pokemon.name
  const height = document.createElement('h3')
  height.innerText = pokemon.height
  const weight = document.createElement('h3')
  weight.innerText = pokemon.weight

  pokeData.append(image, name, height, weight)
}

