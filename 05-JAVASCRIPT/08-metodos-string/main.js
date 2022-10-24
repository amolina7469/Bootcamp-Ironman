//? Métodos de los strings

const texto ='Hola. Qué pasa, tronco?'

//* Todos los "strings" tienen una propiedad llamada "lenght" que me da la longitud de la cadena

console.log(texto.length)
console.log('hola'.length)

//* .trim() -> para eliminar espacio delante y detrás del texto

console.log('    hola      ')//"     hola     "
console.log('    hola      '.trim())//"hola"

const fraseConEspacios = '       hola!!      '
const fraseSinEspacios = fraseConEspacios.trim()

console.log(fraseConEspacios)
console.log(fraseSinEspacios)

//*===========================================*//

//* .tolowerCase() y toUpperCase() -> devuelve el string convertido a minúsculas o a mayúsculas

const textoEnMayusculas =texto.toUpperCase()
const textoEnMinusculas =texto.toLowerCase()

console.log(textoEnMayusculas)
console.log(textoEnMinusculas)

//*===========================================*//


//* .indexOf('substring') -> devuelve la posición en la uqe se encuentra el trozo de texto que hemos puesto en el paréntesis
//!Siempre empieza con el índice 0 y devuelve la primera coincidencia

console.log(texto.indexOf('Qué'))
console.log(texto.indexOf('a'))
console.log(texto.indexOf('a',5))//Busca una "a" a partir de la quinta posición
console.log(texto.indexOf('zapato')) // si no lo encuentra te devuelve -1

//* .lastIndexOf('substring') --> devuelve la última coincidencia

console.log(texto.lastIndexOf('a'))

//*===========================================*//

//* .includes('substring') --> devuelve true o false dependiendo si el texto que pasamos está o no dentro del string

console.log(texto.includes('pasa'))
console.log(texto.includes('zapato'))


//*===========================================*//

//* .slice(donde empieza el corte y donde termina) --> corta un troza de texto desde la posición inicial hasta la final

const textoCortado= texto.slice(9) //pasa, tronco?
console.log(textoCortado)

const textoCortado2= texto.slice(7,14) // ué pasa
console.log(textoCortado2)

//Ejemplo de cortar un trozo usando indexOf

const textoSinHola = texto.slice(texto.indexOf('Qué'))
console.log(textoSinHola)


const textoSinHola2 = texto.slice(texto.indexOf('Qué'),texto.indexOf('tronco'))
console.log(textoSinHola2)


//*===========================================*//

//* .split('') --> Convierte un string en un array. Va a separar el texto utilizando el separador que le pases en los paréntesis

console.log(texto.split()) //['Hola. Qué pasa, tronco?']
console.log(texto.split("")) //['H', 'o', 'l', 'a', '.', ' ', 'Q', 'u', 'é', ' ', 'p', 'a', 's', 'a', ',', ' ', 't', 'r', 'o', 'n', 'c', 'o', '?']
console.log(texto.split(" ")) //['Hola.', 'Qué', 'pasa,', 'tronco?']
console.log(texto.split("a")) //['Hol', '. Qué p', 's', ', tronco?']


//*===========================================*//

//? Resumen

// string.lenght  ---> da la longitud
// string.trim()-->quita espacios
// string.toLowerCase() -->pasa a minúsculas
// string.toUpperCase() --> pasa a mayúsculas
// string.indexOf() -->
// string.lastIndexOf() -->
// string.includes() -->
// string.slice(start, end) -->
// string.split() -->


//? Ejercicios rápidos

const frase = 'Me encanta JavaScript 😊'

//guardad en una variable el texto en minúsculas y la mostrais en consola
// que salga en consola la posición donde empieza la palabra "JavaScript"
// que salga en consola solo la palabra "JavaScript" sin el emoticono
// guarda en una variable un array con todas las palabras por separado
// Si la frase tiene el texto '😢' 
  // que aparezca en consola el texto "No estés triste" 
//y si si no, 
  // que ponga "¡Eso es que estás contento"
// Guarda en una variable el trozo de texto que va desde la posición 2 hasta donde empieza "JavaScript" y le quitas los espacios elante y detrás.


const minusculas= frase.toLowerCase()
console.log(minusculas)

console.log(frase.indexOf('JavaScript'))

console.log(frase.slice(frase.indexOf('JavaScript'), frase.indexOf('😊')-1))

const array= frase.split(" ")
console.log(array)

const triste=frase.includes('😥')

if (triste == true) {

  console.log('No estes triste')  
}else{
  
  console.log('Eso es que estas contento')  

}

const trozo= frase.slice(2,11).trim()

console.log(trozo)
