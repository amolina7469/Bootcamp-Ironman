/*Comentario 
de 
bloque */

//Comentario en Línea

//* SINTAXIS DE JAVASCRIPT 

//! Es "case sensitive" Sensible a mayúsculas y minúsculaas
//! es de tipado débil, QUE UNA VARIABLE PODRÁ CONTENER EL TIPO DE DATO QUE QUIERAS Y PODRÁS CAMBIARLO CUANDO QUIERAS

//Cada sentencia de código termina con ';', pero no es obligatorio.



// console.log('hola de un archivo.js');

// console.log('otro console.log')

//? VARIABLES

//* para crear una variable usaremos let y const

let MiNombre //! mal! No debería empezar por mayúsculas

let miNómbreConEñe//! Regulero... no pongamos cararcteres especiales, ni ñ, ni acentos,..

let minombreyapellido //!Nunca sin camelCase o snake_case

let mi_nombre //* guiones bajos si

let $minombre //*$ tambien vale

let miNombre //* ¡Super! 😎



//* como se crea una variable
//* let --> Permite crear variable y luego cambiar el valor
//Podemos crear una variable -> Podemos crear una variable sin asignarle un valor

let nombre 

console.log(nombre)

//Podemos inicializar una variable

let tuNombre ='Amancio'
console.log(tuNombre)

// Podemos declarar en inicilaizar directamente una variable

let apellido = 'Molina'
console.log(apellido)

let otroNombre = 'Lorena', otroApellido ='Rivas'

console.log(otroNombre, otroApellido)

//Modificar una variable
console.log(tuNombre)
tuNombre ='Ronald'
console.log(tuNombre)
tuNombre =23
console.log(tuNombre)

//* const --> permite crear una variable a la que no podemos cambiar su valor

const miPerra= 'Eevee'
console.log(miPerra)

//miPerra = 'Nala' //! esto es un error

//! const sólo permite declara e inicializar al mismo tiempo

//const  miPerra  //! guardaría undefined en 'miPerra' no está permitido


//* var --> forma tradicional de declara una variable no se recomienda su uso

var miFruta= 'Plátano'
console.log(miFruta)


//************************************************************************/

//? Como mostrar datos para "debuggear"


//* console.log()--> Muestra en consola lo que pongas entre los ()

console.log('miFruta -->', miFruta)
//* alert() --> muestra una ventana emergente que corta la ejecución del código hasta que le des a aceptar

alert('esto es un alert')
console.log('Texto despues de un alert')

//* prompt() --> input para que interactue el usuario
//El cvalor introducido por el usuario deberiamos gurdarlo en una variable, para usarlo más tarde
const nombreUser = prompt('Cómo te llamas?')
console.log(nombreUser)

//Posibilidades del prompt
  //1: Si escribes algo se guardará ese texto
  //2: Si no escribes nada se guardará un texto vacío ''
  //3: Si le das a cancelar guardarám "null"

  //? Extras del console

  //Mensaje de error en rojo
  console.error('Esto es un error')
  // Mensaje de advertencia
  console.warn('Esto es una advertencia')
  //Contador de tiempo
  console.time()
  let miVariable=5
  console.timeEnd()

  //Contador de tiempo con nombre
  console.time('Temporizador1')
  let otraVariable=7
  console.timeEnd('Temporizador1')