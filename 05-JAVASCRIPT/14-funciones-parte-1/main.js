//? Funciones
//* Son bloques de código reutilizables

// Definición de una función --> function nombre_funcion (){}

function saludar () {
  console.log('Hola!')
}

// Invocar o ejecutar la función

saludar()

// Particularmente usando la palabra "function" (que es la forma antigua) podemos ejecutar la función antes de ser creada -- HOISTING
saludo()

function saludo () {
  console.log('Holita!')
}

//* Para añadirle dinamismo, podemos pasarle parametros a la función

function saludoDinamico (nombre) {
  console.log('Hola, ' + nombre)
}

saludoDinamico('Amancio')


function buenosDias (nombre) {
  if (nombre !== undefined && isNaN(nombre) === true) {
    console.log('Buenos días, ' + nombre)
  } else {
    console.log('Buenos días!')
  }
}

buenosDias()
buenosDias('Rocio')
buenosDias(23)


// podemos pasar varios parametros
function buenasTardes (nombre, apellido) {
  console.log(`Buenas tardes, ${nombre} ${apellido}`)
}

buenasTardes('Amancio', 'Molina')

// podemos pasar un valor por defecto
function buenasNoches (nombre = 'amig@') {
  if (typeof nombre === 'number') {
    console.log('Buenos noches, amig@')
  } else {
    console.log('Buenos noches, ' + nombre)
  }
}

buenasNoches()
buenasNoches('Amancio')
buenasNoches(23)

