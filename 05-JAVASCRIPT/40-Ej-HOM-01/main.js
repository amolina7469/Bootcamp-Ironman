const arrayFrutas = [
  {
    nombre: 'plátano',
    procedencia: 'Canarias',
    cantidad: 5,
    emoticono: '🍌'
  },
  {
    nombre: 'manzana',
    procedencia: 'Marruecos',
    cantidad: 2,
    emoticono: '🍎'
  },
  {
    nombre: 'uvas',
    procedencia: 'La Rioja',
    cantidad: 10,
    emoticono: '🍇'
  },
  {
    nombre: 'aguacate',
    procedencia: 'Perú',
    cantidad: 0,
    emoticono: '🥑'
  },
  {
    nombre: 'pera',
    procedencia: 'Toledo',
    cantidad: 7,
    emoticono: '🍐'
  },
  {
    nombre: 'sandía',
    procedencia: 'Marruecos',
    cantidad: 0,
    emoticono: '🍉'
  }
]


// Filtra en un array nuevo todas las frutas que tengan más de 5 unidades

const mas5Unidades = arrayFrutas.filter((fruta) => { return fruta.cantidad > 5 })
console.log(mas5Unidades)


// Quiero un array nuevo con todas las frutas

const arrayNuevo = arrayFrutas.forEach((fruta, i) => {
  arrayNuevo.push(fruta[i])
})
console.log(arrayNuevo)


// Filtra todas las frutas que sean de Marruecos

const frutaDeMarruecos = arrayFrutas.filter((fruta) => { return fruta.procedencia === 'Marruecos' })
console.log(frutaDeMarruecos)

// Encuentra la fruta que tenga menos de 5 unidades y luego imprime su emoticono en consola

const menos5Unidades = arrayFrutas.filter((fruta) => { return fruta.cantidad < 5 })

menos5Unidades.forEach((fruta) => {
  console.log(fruta.emoticono)
})
// Encuentra la fruta que venga de Canarias y súmale 2 a su cantidad

const frutaCanarias = arrayFrutas.filter((fruta) => {
  if (fruta.procedencia === 'Canarias') {
    fruta.cantidad = fruta.cantidad + 2
    return fruta
  }
})
console.log(frutaCanarias)
