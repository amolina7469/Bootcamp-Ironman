// *Funciones 01

function comparaNumero (numero1, numero2) {
  if (numero1 > numero2) {
    console.log(`${numero1} es mayor que ${numero2}`)
  } else if (numero2 > numero1) {
    console.log(`${numero2} es mayor que ${numero1}`)
  } else {
    console.log(`${numero1} es igual que ${numero1}`)
  }
}

comparaNumero(23, 23)

// * Funciones 02

function comparaNumeros (numero1, numero2) {
  if (numero1 === numero2) {
    console.log('True')
  } else {
    console.log('false')
  }
}


comparaNumeros(5, 5)

// * Funciones 03

function mayusculas (palabra) {
  const resultado = palabra.substr(0, 1).toUpperCase() + palabra.slice(1) // Si sólo ponemos un número cogera las letras desde ese punto hasta el final
  console.log(resultado)
  // const letra = palabra.slice(0, 1).toUpperCase()
  // const recorte = palabra.slice(1, palabra.length)
  // console.log(letra + recorte)
}


mayusculas('banana')

