//? High Order Functions - HOF
//? Funciones de primera clase


// Son funciones que reciben como parámetro otra función (o también pueden retornar otra función). La función que se pasa por parámetro tiene el nombre concreto de "callback"

//* La siguiente función SOLO IMPRIME HOLA
const saludar = () => {
  console.log('Hola')
}

//* ========================================== *//

//* Las siguientes función REPITEN ALGO 10 veces, pero son muy específicas y solo van a hacer lo que saben cada una.
const diezVecesMensaje = (mensaje) => {
  for (let i = 1; i <= 10; i++) {
    console.log(mensaje)
  }
}
diezVecesMensaje('Hola')

const diezVecesSumar = (numero) => {
  for (let i = 0; i < 10; i++) {
    numero += 1
    console.log(numero)
  }
}

diezVecesSumar(5)

const diezVecesSaludar = () => {
  for (let i = 0; i < 10; i++) {
    saludar()
  }
}

diezVecesSaludar()

//* ========================================== *//


//* La siguiente, en cambio REPITE CÓDIGO 10 VECES, pero lo que sea que quieres repetir esas 10 veces, se lo pasas como parámetro dentro de la función
console.log('=========== HOF ==========')


const diezVeces = (funcionCualquiera) => {
  for (let i = 1; i <= 10; i++) {
    funcionCualquiera()
  }
}

// podemos pasar una función que ya exista
diezVeces(saludar)

// o podemos pasar una función que CREAMOS DIRECTAMENTE ENTRE LOS PARÉNTESIS
diezVeces(() => { console.log('eiiiiiii') })

let numero = 5
diezVeces(() => { numero += 1 })
console.log(numero)


//* ========================================== *//
//* ========================================== *//


//* Si os acordás del método addEventListener, era una HOF porque como segundo parámetro le pasábamos una función
const h1 = document.querySelector('h1')
h1.addEventListener('click', () => {})

//* Y además si os acordáis, también podíamos recibir un objeto que nos "regalaban" que daba información del evento

h1.addEventListener('click', (event) => {})

//* Vamos a crear una HOF que, además de repetir código, ENVÍE UN VALOR POR PARÁMTERO (como "regalo")

const cincoVeces = (fn) => {
  for (let i = 1; i <= 5; i++) {
    //* Esto es Ejecutar la función, no crearla así que le puedo pasar los parámetros que quiera, que a la hora de CREAR la función, ya veremos si los usaremos o no
    fn(i)
  }
}

const numerosDelUnoAlCinco = (index) => {
  console.log(index)
}

cincoVeces((i) => { numerosDelUnoAlCinco(i) })

//* ========================================== *//
//* ========================================== *//

//* Vamos a crear una función HOF que repita un código DESDE DONDE QUERAMOS, HASTA DONDE TE DE LA GANA ACABAR
  //* y que además pueda hacer "LO QUE TE DE LA GANA"


const desdeHastaQueQuieras = (minimo, maximo, fn) => {

  for (let i = minimo; i <= maximo; i++) {
    fn(i)
  }

}
console.log('==============================')

desdeHastaQueQuieras(1, 30, (index) => {
  if (index % 3 === 0) {
    console.log(index)
  }
})


desdeHastaQueQuieras(1, 20, (index) => {
  if (index % 2 === 0) console.log(index + ' es par')
  else console.log(index + ' es impar')
})

console.log('**********FIZBUZZ**********')

desdeHastaQueQuieras(1, 50, (index) => {
  if (index % 3 === 0 && index % 5 === 0) {
    console.log('FizzBuzz')
  } else if (index % 3 === 0) {
    console.log('Fizz')
  } else if (index % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(index)
  }
})


//* ========================================== *//
//* ========================================== *//
//* ========================================== *//
//* Vamos a crear un HOF que lo único que haga sea recorrer un array de principio a fin


const recorredorArrays = (array, fn) => {
  for (let i = 0; i < array.length; i++) {
    fn(array[i], i, array)
  }
}


recorredorArrays(['🍎', '🍐', '🍑'], (fruta) => {
  // 1: fruta = '🍎'
  // 2: fruta = '🍐'
  // 3: fruta = '🍑'
  console.log(fruta)
})


const frutas = ['🍎', '🍐', '🍌', '🍇', '🍒', '🍊', '🍉', '🥑']
const nums = [2, 15, -13, 23, 75, 4, 12]


// Fruta 1: '🍎'
// Fruta 2: '🍐'

recorredorArrays(frutas, (fruta, index) => {
  console.log(`Fruta ${index + 1}: ${fruta}`)
})

recorredorArrays(nums, (num) => {
  console.log(num)
})

// si no queréis usar alguno de los primeros parámetros, se suele dejar un guión bajo
recorredorArrays([true, true, false, true, false], (boolean, index, array) => {
  console.log(index)
})
recorredorArrays([true, true, false, true, false], (_, index) => {
  console.log(index)
})
