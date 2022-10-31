//? Tipos de datos

//? Datos primitivos

//* String --> Cadenas de texto

const conComillasSimples = 'Soy un string con comillas simples'
const conComillasDobles = "Soy un string con comillas dobles"
const conComillasVarias = 'Ivan le dice "gaupa" a su mujer'
const conComillasVarias2 = "Ivan le dice 'gaupa' a su mujer"
const conComillasVarias3 = "Ivan le dice \'gaupa'\ a su mujer"
console.log(conComillasVarias3)
// Bacsticks respeta los espaciados

const conBackticks = `Soy un string 
con 
backticks`

// Podemos unir varios strings conactenarlos con el '+'

const nombre = 'Amancio'
const apellido = 'Molina'
const nombreCompleto = nombre + ' ' + apellido
console.log('Me llamo ' + nombreCompleto)


//* los backticks te permiten interpolar expresiones de javascript --> Usando ${}

const miNombreCompleto = `${nombre} ${apellido}`
console.log('Me llamo ' + miNombreCompleto)
console.log(`Me llamo ${miNombreCompleto}`)

//? Con la palabra reservada "typeof" podemos saber el tipo de una variable
console.log(typeof nombreCompleto)

//* =============================================

//* Number --> enteros, decimales,..
// el navegador los muestra en un color distinto alos strings

let num1 = 23
num1 = -40
num1 = 5.47
num1 = -3.14

console.log(num1)
console.log(typeof num1)

//* Boolean --> si/no verdader/falso 1/0

const estoyCasdo = true
const estoySoltero = false

//! cuando nombremos variable booleanas intentemos darle un nombre que tenga un verbo


console.log(estoyCasdo)
console.log(estoySoltero)
console.log(typeof estoyCasdo)

//* =============================================

//* Undefined --> Valor no definido

let miNombre
console.log(miNombre)
console.log(typeof miNombre)

//* =============================================
//* null --> Cuando explicitamente quermos darle valor nulo

const masHijos = null
console.log(masHijos)

// !Esto da "object" como tipo de dato. Lo podemos considerar un error de Ecmascript. Debería ser de tipo null
console.log(typeof masHijos)

//* =============================================
//* =============================================
//* =============================================

//* Symbol --> No lo vamos a dar porque es muy técnico

const miSimbolo = Symbol()
console.log(typeof miSimbolo)

//? Datos no primitivos

//* Arrays --> Grupo de datos dentro de una misma variable

const frutas = ['Pera', 'Plátano', 'Manzana']
console.log(frutas)

//* Objects --> Varios datos de un mismo elemento

const persona = {
  nombre: 'Amancio',
  edad: 42,
  casado: true
}

//* Funciones --> codigo que se ejecutar más adelante

a = 1
b = 2
let suma = (a + b)
console.log(suma)