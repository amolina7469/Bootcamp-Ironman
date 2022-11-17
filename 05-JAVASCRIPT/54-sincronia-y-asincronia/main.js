//* Javascript es un lenguaje de UN SOLO HILO DE EJECUCIÓN (single threaded)

//? Dos conceptos
// lenguaje síncrono, hasta que no termina un código no pasa al siguiente

// console.log('uno')

// let dato
// for (let i = 0; i < 800000000; i++) {
//   dato = i
// }

// console.log('dos')

// lenguaje asíncrono --> que puede continuar ejecutando código a pesar de que haya algo que no haya terminado

// console.log('uno')

// setTimeout(() => { console.log('tres') }, 2500)

// console.log('dos')


//* ========================================== *//

//* Ejemplo de momento en el que necesitamos "arreglar" el problema de la asincronía
// Pongamos que quiero pedir información del tiempo que va a hacer en Barcelona mañana.  y le pido esa informaión al servidor


const tiempoDelServidor = '🌞'
const tiempo1 = Math.random() * 5000
const tiempo2 = Math.random() * 5000

const pedirElTiempo = () => {
  let tiempoBCN = 'El tiempo en Barcelona es: '

  setTimeout(() => {
    // pido el tiempo al servidor
    tiempoBCN += tiempoDelServidor
    console.log(tiempoBCN)
  }, tiempo1)

  return tiempoBCN
}

const cualEsElTiempo = pedirElTiempo()

document.body.append(cualEsElTiempo)


//* La siguiente manera es la que siempre se ha utilizado para solucionar este problema. con CALLBACKS()

const pedirElTiempoConCallback = (callback) => {
  let tiempoBCN = 'El tiempo en Madrid es: '

  setTimeout(() => {
    tiempoBCN += tiempoDelServidor
    callback(tiempoBCN)
  }, tiempo2)
}


pedirElTiempoConCallback((tiempo) => {

  // aquí puedo hacer lo que quiera porque sabemos 100% seguros que tenemos ya la info del servidor
  document.body.append(tiempo)
})

//* La otra forma de solucionar esto es usando PROMESAS que lo veremos en la siguiente carpeta.
