// ? Funciones 04
// Crea una función que recibe como parámetro una fruta como string y devuelve la
// posicion del array donde esté esa fruta.
// Si no encuentra el elemento que devuelva -1 ;
// Guarda el valor que retorna la función y imprimela en la consola.

const arrayFrutas = ['Plátanos', 'Bananas', 'Piñas', 'Manzanas', 'Peras', 'Uvas', 'Pomelos']

const myIndexOf = (valor, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === valor) {
      const posicion = i
      return posicion
    }
  }
  const posicion = -1
  return posicion
}

const posicion = myIndexOf('Piñas', arrayFrutas)
console.log(posicion)

const posicion2 = myIndexOf('Chirimoyas', arrayFrutas)
console.log(posicion2)


// ? Funciones 05
// Crea una función que reciba el array de frutas y devuelva un string con todas las
// frutas separadas por una coma y un espacio.

const myFunction = (array) => {
  let stringFinal = ''
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      stringFinal += '"' + array[i] + ',' + ' '
    } else if (i === array.length - 1) {
      stringFinal += array[i] + '"'
    } else {
      stringFinal += array[i] + ',' + ' '
    }
  }
  return stringFinal
}

console.log(myFunction(arrayFrutas))

// * ======================================== *//


const myFunction2 = (array, separador) => {
  let stringFinal = ''
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      stringFinal += '"' + array[i] + separador + ' '
    } else if (i === array.length - 1) {
      stringFinal += array[i] + '"'
    } else {
      stringFinal += array[i] + separador + ' '
    }
  }
  return stringFinal
}

console.log(myFunction2(arrayFrutas, ';'))
