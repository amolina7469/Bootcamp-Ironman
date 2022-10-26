const frutas = ['🍎', '🍌', '🍍', '🥭', '🍊', '🍉']
const nums = [2, 15, -13, 23, 75, 4, 12]

// *Array.isArray() --> Devuelve true o false dependiendo si es un array lo que le pasamos o no.

console.log(Array.isArray(frutas)) // trur
console.log(Array.isArray('frutas')) // false

// *===============================================*/
//! Los 4 siguientes metodos MUTAN el array original

// * .push() --> añade un elemento al final del array

const nuevoLength = frutas.push('🥝', '🍇')// añade uno o varios elementos y puedes guardar la nueva longitud del array ya que la devuelve

console.log(nuevoLength)// longitud del nuevo array
console.log(frutas)// Como queda el array frutas despues de añadir

// * .pop() --> Quita un elemento del final del array
// No hace falta pasarle nada el sabe que tiene que quitar el último y lo retorna

frutas.pop()
console.log(frutas)

// * .unshift() --> añade un elemento al principio del array

frutas.unshift('🍓')
console.log(frutas)

// * .shift() --> quita un elemento del principio

frutas.shift('🍓')
console.log(frutas)


// *===============================================*/

// * indexOf() --> devuelve el índice de la posición de lo que le pasemos por parametro, si no lo encuentra devolverá -1

console.log(frutas.indexOf('🍌')) // posición 1
console.log(frutas.indexOf('🥐')) // devuelve -1 por lo que no está

// * includes() -->true si lo que pasamos esta en el array, false si no

console.log(frutas.includes('🍌'))
console.log(frutas.includes('🥐'))

// * .reverse() --> invierte el orden de los elementos del array
// ! MUTA el array original

console.log(nums)
nums.reverse()
console.log(nums)

// *.join() --> convierte un array en un string añadiendo el separador que tu le digas

const frase = 'Me encanta estudiar JavaScript'
const fraseArray = frase.split(' ')
console.log(fraseArray)

console.log(fraseArray.join()) // añade comas si no le paso nada
console.log(fraseArray.join('')) // lo junta todo sin espacios ni comas
console.log(fraseArray.join(' ')) // lo junta todo con  espacios
console.log(fraseArray)


const texto = ' kjjlkjdlkjlksjjf kojlkfjolfjokfdjklosdf oijjmokjiojiojfwe joijoijoijoijkf iojiojoijiojkf kojiojiojiofj iojoijoijiofew miojoijiojfwelp`l`pgl lkpl`lgf kpokpokg okopkop gefopkpok pokg iojioji fkojoipj ofd oijoi j fjpoj opfdj pfdjo kjfdoij fdoij oidfjiopfj ojf oi jf oijf oijerr efijer iojfe oiefj oifej ifoej efioj efiofej oife oifm iofkdjoif ejifeo jefi ioefj ifeo efjiouj feifejio fejfeuio'


const textoArray = texto.split('')
console.log(textoArray)

for (let i = 0; i < textoArray.length; i++) {
  textoArray[i] = textoArray[i].slice(0, 1).toUpperCase() + textoArray[i].slice(1)
}

const textofinal = textoArray.join(' ')
console.log(textofinal)

// *=======================================================*/

// * PARA QUITAR, SUSUTITUIR O CORTAR UN TROZO DE ELEMENTOS DE UN ARRAY

// * slice() --> ¡No muta! retorna un pedazo de array, no modifica el original

console.log(nums)
const trozoDeNums = nums.slice(2, 4)
console.log(trozoDeNums)

// * splice() --> elimina trozos del array
// ! Si muta el array original

console.log(frutas)
const trozoFrutas = frutas.splice(4, 3) // Cortamos desde la posición 4 , 3 elementos
console.log(trozoFrutas)
console.log(frutas) // Ahora el array frutas es de 4 elementos

const otroTrozoFrutas = frutas.splice(frutas.indexOf('🍍'), 1, '🍟') // quita un elemento desde donde esta la piña y podemo añadir uno o más elementos en esa posiciópn en adelante
console.log(frutas) // Ahora el array frutas es de 4 elementos

