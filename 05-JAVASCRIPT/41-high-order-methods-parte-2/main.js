//* Voy a ahcer un HOF que coja un array y me permita MODIFICAR SUS ELEMENTOS y me los ponga en un NUEVO ARRAY
const nums = [2, 15, -13, 23, 75, 4, 12]


const multiplicaPorDos = (array) => {
  const nuevoArray = []

  for (let i = 0; i < array.length; i++) {
    const modificacion = array[i] - 5
    nuevoArray.push(modificacion)
  }

  return nuevoArray
}

console.log(multiplicaPorDos(nums))


const modificadorDeArrays = (array, callback) => {
  const nuevoArray = []

  for (let i = 0; i < array.length; i++) {
    // const modificacion = callback(array[i], i, array)
    // nuevoArray.push(modificacion)
    nuevoArray.push(callback(array[i], i, array))
  }

  return nuevoArray
}

console.log(modificadorDeArrays(nums, (num) => { return num * 7 }))


//? EL MÉTODO QUE MODIFICA LOS ELEMENTOS DEL ARRAY Y LOS DEVUELVE EN UNO NUEVO SE LLAMA -->   .map()
//! el .map() NUNCA DEVUELVE MENOS ELEMENTOS DE LOS QUE TIENE EL ARRAY ORIGINAL

console.log(nums.map((numero) => { return numero - 1 }))

// Con el siguiente array de frutas, quiero añadirle a cada elemento 5 frutas porque me ha llegado una caja con 5 de cada

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
console.log('Array de frutas ->', arrayFrutas)

const frutasConCincoMas = arrayFrutas.map((fruta) => {
  return {
    nombre: fruta.nombre,
    procedencia: fruta.procedencia,
    emoticono: fruta.emoticono,
    cantidad: fruta.cantidad + 5
  }
})

const frutasConCincoMas2 = arrayFrutas.map((fruta) => {
  return { ...fruta, cantidad: fruta.cantidad + 5 }
})

console.log(frutasConCincoMas)

//! Aquí hay que tener cuidado cuando queremos hacer la versión ultramegacorta, porque cuando quitamos las llaves de la función, no podemos devolver un objeto a saco, hay que ponerlo entre paréntesis
const frutasConCincoMas3 = arrayFrutas.map((fruta) => ({ ...fruta, cantidad: fruta.cantidad + 5 }))


// cambia la procedencia de la fruta que ponga 'Canarias' por 'Islas Canarias'

console.log(arrayFrutas.map((fruta) => {
  if (fruta.procedencia === 'Canarias') {
    return { ...fruta, procedencia: 'Islas Canarias' }
  } else {
    return { ...fruta }
  }
}))


//! Siempre que retornemos el objeto SIN MODIFICAR, es recomendable que lo retornemos con una nueva referencia a un objeto nuevo con el spread operator, así luego no hay peligro de modificar el original


const cambioIslasCanarias = arrayFrutas.map((fruta) => {
  return fruta.procedencia === 'Canarias'
    ? { ...fruta, procedencia: 'Islas Canarias' }
    : { ...fruta }
})

console.log(cambioIslasCanarias)
const uvas = cambioIslasCanarias.find((fruta) => fruta.procedencia === 'La Rioja')
uvas.emoticono = '🍷'
console.log(uvas)
// Aquí vemos como el array original no sufre ningúna modificación
console.log(arrayFrutas)


//! Para mí, la versión más cortita en este caso no se lee bien, yo me quedaría con la anterior
console.log(arrayFrutas.map((fruta) => fruta.procedencia === 'Canarias' ? { ...fruta, procedencia: 'Islas Canarias' } : { ...fruta }))


//* ========================================== *//
//* ========================================== *//
//* ========================================== *//

//? .some() --> Método que devuelve true o false si ALGUNO  de los elementos del array cumple la condición

const frutaDeMarruecos = arrayFrutas.some((fruta) => { return fruta.procedencia === 'Marruecos' })
console.log('Alguna de Marruecos? -->', frutaDeMarruecos)

const frutaDeValencia = arrayFrutas.some((fruta) => fruta.procedencia === 'Valencia')
console.log('Alguna de Valencia? -->', frutaDeValencia)

//? .every() --> Mñetodo que devuelve true o false si TODOS los elementos del array cumplen una condición

const todasDeMarruecos = arrayFrutas.every((fruta) => { return fruta.procedencia === 'Marruecos' })
console.log('Todas de Marruecos? -->', todasDeMarruecos)

const nombreMasTresLetras = arrayFrutas.every((fruta) => {
  return fruta.nombre.length > 3
})
console.log('Todos los nombres tienen más de 3 letras? -> ', nombreMasTresLetras)

//* ========================================== *//
//* ========================================== *//
//* ========================================== *//

//? .sort() --> Método que sirve para ordenar elementos
//! Este método muta el array original

const misNums = [2, 15, -13, 23, 75, 4, 12]
const letras = ['b', 'a', 'A', 'c', 'D']

// aquí vemos cómo se muta el original
// console.log(letras)
// letras.sort()
// console.log(letras)

//* Una forma de NO MUTAR EL ORIGNAL sería la siguiente
const nuevoMisNums = [...misNums]
const numerosOrdenados = nuevoMisNums.sort()
const numsOrdenados = [...misNums].sort()
console.log(misNums)
console.log(nuevoMisNums)

console.log(letras)

letras.sort((valor1, valor2) => {
  if (valor1.toLowerCase() < valor2.toLowerCase()) {
    return -1
  } else if (valor1.toLowerCase() > valor2.toLowerCase()) {
    return 1
  } else {
    return 0
  }
})
console.log(letras)


// para ordenar números es mucho más fácil

// misNums.sort((num1, num2) => {
//   if (num1 < num2) return -1
//   else if (num1 > num2) return 1
//   else return 0
// })

// misNums.sort((num1, num2) => {
//   return num1 - num2
// })


misNums.sort((num1, num2) => num1 - num2)

// para ordenar en sentido descendente invertimos la resta

misNums.sort((num1, num2) => num2 - num1)

console.log(misNums)

// para ordenar textos con caracteres especiales lo haríamos con el método .localeCompare()
//! Mirar la documentación

const palabras = ['cârrö', 'carrö', 'café', 'clîché', 'cafetería']

palabras.sort((elA, elB) => {
  if (elA < elB) return -1
  else if (elA > elB) return 1
  else return 0
})


palabras.sort((palabraA, palabraB) => {
  return palabraA.localeCompare(palabraB)
})

console.log(palabras)


// ordena las frutas por cantidad de más a menos

const frutasPorCantidad = [...arrayFrutas].sort((frutaObjA, frutaObjB) => {
  if (frutaObjA.cantidad < frutaObjB.cantidad) return 1
  else if (frutaObjA.cantidad > frutaObjB.cantidad) return -1
  else return 0
})

const frutasPorCantidad2 = [...arrayFrutas].sort((frutaObjA, frutaObjB) => {
  return frutaObjB.cantidad - frutaObjA.cantidad
})

const frutasPorNombre = [...arrayFrutas].sort((frutaObjA, frutaObjB) => {
  if (frutaObjA.nombre.toLowerCase() < frutaObjB.nombre.toLowerCase()) return 1
  else if (frutaObjA.nombre.toLowerCase() > frutaObjB.nombre.toLowerCase()) return -1
  else return 0
})

console.log(frutasPorCantidad2)
console.log(frutasPorNombre)
