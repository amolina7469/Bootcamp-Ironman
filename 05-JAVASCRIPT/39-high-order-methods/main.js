//? High Order Methods --> HOM
//? Métodos de Primera Clase
const frutas = ['🍎', '🍐', '🍌', '🍇', '🍒', '🍊', '🍉', '🥑']


//* Un HOF que recorra un array cualquiera y haga LO QUE TE DE LA GANA por cada elemento del array.
  //* Te regala cada elemento del array, el índice y el array

const recorredorArrays = (array, fn) => {
  for (let i = 0; i < array.length; i++) {
    fn(array[i], i, array)
  }
}


//? PRIMER MÉTODO DE PRIMERA CLASE -->  .forEach()
//* SUSTITUYE AL FOR...OF, pero con la suerte de que también me ofrece el índice
frutas.forEach((fruta, index) => {
  console.log(`Fruta Nº ${index + 1}: ${fruta}`)
})


//* Ejemplo con un ejercicio anterior

/* Crea 3 arrays:
El primero tendrá 5 números.
El segundo se llamará pares y el tercero impares.  Ambos estarán vacíos.
Multiplica cada uno de los números del primer array por un número aleatorio
entre 1 y 10:
Si el resultado es par, guarda ese número en el array de pares y si es impar
en el otro.
Mostrar por consola:
La multiplicación que se ha hecho en el siguiente formato -> 2 x 3 = 6
El array de pares e impares. */

/*
const nums = [2, 15, -13, 23, 75]
const pares = []
const impares = []


nums.forEach((num) => {
  const random = Math.ceil(Math.random() * 10)
  const multiplicacion = num * random

  if (multiplicacion % 2 === 0) {
    pares.push(multiplicacion)
  } else {
    impares.push(multiplicacion)
  }

  console.log(`${num} x ${random} = ${multiplicacion}`)
})

console.log(pares)
console.log(impares)
*/

//* ========================================== *//
//* ========================================== *//
//* ========================================== *//

//* Función HOF que recorra un array y me devuelve un elemento que busquemos dentro
const misFrutas = ['🍎', '🍐', '🍌', '🍇', '🍒', '🍊', '🍉', '🥑']
const nums = [2, 15, -13, 23, 75, 4, 12]

const encontrarPlatano = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '🍌') {
      return array[i]
    }
  }
}

console.log(encontrarPlatano(misFrutas))
console.log(encontrarPlatano(nums))


const encontrarLoQueMeDeLaGana = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return array[i]
    }
  }
}

// version larga
const platano = encontrarLoQueMeDeLaGana(misFrutas, (fruta) => {
  if (fruta === '🍌') {
    return true
  } else {
    return false
  }
})
console.log(platano)

// versión más corta
const uvas = encontrarLoQueMeDeLaGana(misFrutas, (fruta) => {
  return fruta === '🍇' ? true : false
})

console.log(uvas)

// versión cortísima
const sandia = encontrarLoQueMeDeLaGana(misFrutas, (fruta) => {
  return fruta === '🍉'
})
console.log(sandia)


// versión supermegacortísima
const aguacate = encontrarLoQueMeDeLaGana(misFrutas, (fruta) => fruta === '🥑')


//? MÉTODO DE PRIMERA CLASE que devuelve UN ÚNICO ELEMENTO del array que cumpla la condición -->  .find()

const pera = misFrutas.find((fruta) => {
  return fruta === '🍐' ? true : false 
})

console.log(pera)

const perro = misFrutas.find((fruta) => {
  return fruta === '🐶'
})
console.log(perro)

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
  }
]

const frutaDeMarruecos = arrayFrutas.find((fruta) => {
  return fruta.procedencia === 'Marruecos'
})

const frutaSinStock = arrayFrutas.find((fruta) => fruta.cantidad === 0)

console.log(frutaDeMarruecos)
console.log(frutaSinStock)

//* ========================================== *//
//* ========================================== *//
//* ========================================== *//

//* Función HOF que devuelve UN NUEVO ARRAY con todos los elementos que cumplan una condición (lo más normal es obtener un array más pequeño que el original)

const misNums = [2, 15, -13, 23, 75, 4, 12]

const filtrarPorMultiplosDeCinco = (array) => {
  const nuevoArray = []

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 5 === 0) {
      nuevoArray.push(array[i])
    }
  }

  return nuevoArray
}

console.log(filtrarPorMultiplosDeCinco(misNums))

//* ========================================== *//

// [2, 15, -13, 23, 75, 4, 12]
const filtrarArray = (array, callback) => {
  const nuevoArray = []

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      nuevoArray.push(array[i])
    }
  }

  return nuevoArray
}

const numsMayorCinco = filtrarArray(misNums, (num) => {
  // necesito retornar true o false dependiendo de una condición
  if (num > 5) return true
  else return false
})

const numerosPares = filtrarArray(misNums, (num) => {
  return num % 2 === 0
})

const numerosImpares = filtrarArray(misNums, (num) => num % 2 !== 0)

console.log(misNums)
console.log(numerosPares)
console.log(numerosImpares)


//? MÉTODO DE PRIMERA CLASE que devuelve TODOS LOS ELEMENTOS que cumplan la condición dentro de UN NUEVO ARRAY -->  .filter()

const pares = misNums.filter((numero) => {
  return numero % 2 === 0
})
const impares = misNums.filter((num) => num % 2 !== 0)

console.log(pares)


// filtrame las frutas de arriba por las que SI HAY STOCK

const frutasEnStock = arrayFrutas.filter((fruta) => { return fruta.cantidad > 0 })

//! el find siempre devuelve el primero que encuentre
const frutasEnStock2 = arrayFrutas.find((fruta) => { return fruta.cantidad > 0 })
console.log(frutasEnStock)
console.log(frutasEnStock2)
