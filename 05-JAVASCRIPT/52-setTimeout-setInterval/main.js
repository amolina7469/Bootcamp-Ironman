//* setTimeout() es un TEMPORIZADOR que se va a esperar unos segundos hasta ejecutar una función

setTimeout(() => {
  console.log('Hola después de 3 segundos')
}, 3000)

const saludar = () => {
  console.log('hola')
}

setTimeout(saludar, 2000)


//* setInterval() es un INTERVALO que se va a arepetir cada X segundos
// setInterval(saludar, 1000)


//? si quieres parar un timeout o un interval, primero tienes que guardar su valor en una variable

const stopInterval = document.querySelector('.stopInterval')

const miIntervalo = setInterval(() => {
  document.body.append('hola')
}, 1000)

stopInterval.addEventListener('click', () => clearInterval(miIntervalo))
