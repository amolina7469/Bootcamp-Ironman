//? Objeto Date


// Tiene un método estático (que no necesita ser instanciado) que sirve para darte una fecha en MILISEGUNDOS desde el 1 de enero de 1970

const fechaJustoAhora = Date.now()

const newUser = {
  username: 'ivluengo',
  hasPaid: true,
  registerDate: Date.now()
}

// Si instanciamos la clase Date, obtenemos un objeto que tiene mucha información y métodos para trabajar con la fecha.

//* Si cuando instancio, no le pasamos nada al constructor (es decir, al new) guardará un OBJETO NUEVO CON LA FECHA ACTUAL

const fechaActual = new Date()
//! AUNQUE EN CONSOLA VEAMOS UN STRING, lo que crea el new Date() es un nuevo OBJETO
console.dir(fechaActual)

//* Si le pasamos datos al new Date() crearemos el mismo tipo de objeto pero con una fecha distinta, la que le pasemos.
//! Los meses del año son como los arrays, empiezan en 0 y terminan en 11
const miCumple = new Date(1987, 0, 4, 21, 40)
const navidad = new Date('25 Dec 2022 22:30')
const sanJuan = new Date('2023-06-24')
const fechaMilisegundos = new Date(fechaJustoAhora)

console.log(miCumple)
console.log(navidad)
console.log(sanJuan)
console.log(fechaMilisegundos)


//? Métodos para LEER las fechas

console.log('miCumple.getFullYear() ->', miCumple.getFullYear())
console.log('miCumple.getMonth() ->', miCumple.getMonth()) // mes del año del 0 al 11
console.log('miCumple.getDate() ->', miCumple.getDate()) // día del mes
console.log('miCumple.getDay() ->', miCumple.getDay()) // día de la semana empezando el domingo y siendo domingo el 0 y el sábado 6

console.log('miCumple.getHours() ->', miCumple.getHours()) // horas
console.log('miCumple.getMinutes() ->', miCumple.getMinutes()) // minutos
console.log('miCumple.getSeconds() ->', miCumple.getSeconds()) // segundos
console.log('miCumple.getMilliseconds() ->', miCumple.getMilliseconds()) // milisegundos

//* Para sacar los milisegundos de una fecha ya guardada
console.log('miCumple.getTime() ->', miCumple.getTime())

//! utilizando los mismos métodos pero con la palabra UTC nos da la misma hora pero desde Londres en ese momento
console.log('miCumple.getUTCHours() ->', miCumple.getUTCHours())

//* ========================================== *//
//* ========================================== *//
//* ========================================== *//

//* Podemos también CAMBIAR los datos de un objeto fecha

miCumple.setFullYear(1985)
miCumple.setHours(17)
console.log(miCumple)
// y así con todos los métodos

//* ========================================== *//
//* ========================================== *//

//? ejemplo de guardar una fecha con un input de type="date"
const fecha = document.querySelector('.fecha')
const boton = document.querySelector('.btn')

boton.onclick = () => {
  const fechaUsuario = new Date(fecha.value)
  const fechaMilisegundos = fechaUsuario.getTime()
  // ya podría subir a la base de datos la fecha que me han puesto en el input pasada a milisegundos
}

//* ========================================== *//
//* ========================================== *//
//* ========================================== *//

//* Podemos mostrar en pantalla un string con la fecha del objeto de forma más "cool"

// si no ponemos nada en los paréntesis, nos dvuelve algo parecido a esto
// 25/12/2022, 22:30:00
// y lo hace automáticamente sabiendo en qué país estás
console.log(navidad.toLocaleString())


// si le pasamos como parámetro un string con el código de país, nos ofrece la fecha escrita como lo escriben ellos
console.log('Navidad en formato inglés ->', navidad.toLocaleString('en-UK'))
console.log('Navidad en formato americano ->', navidad.toLocaleString('en-US'))
console.log('Navidad en formato alemán ->', navidad.toLocaleString('de'))
console.log('Navidad en formato koreano ->', navidad.toLocaleString('ko'))


// como extra, nos permite pasarle un segundo parámetro con opciones

const opciones = {
  // dateStyle: 'long',
  day: '2-digit',
  month: 'short',
  hour: '2-digit',
  minute: '2-digit'
}

console.log(navidad.toLocaleString('es', opciones))
