//* localStorage

//! SOLO PUEDE GUARDAR STRINGS

const nombre = 'ivan'
const edad = 35
const frutas = ['🍎', '🍐', '🍌', '🍇', '🍒', '🍊', '🍉', '🥑']
const obj = {
  nombre: 'plátano',
  cantidad: 5
}


//* 1.- Añadir algo a localStorage --> setItem()
localStorage.setItem('miNombre', nombre)
localStorage.setItem('miEdad', edad)
localStorage.setItem('frutas', frutas)
localStorage.setItem('plátano', obj)

//? si vuelvo a hacer setItem con algun key que ya existe simplemente lo SOBREESCRIBE
localStorage.setItem('miEdad', 37)


//* 2.- Coger cosas de localStorage --> getItem()

const miNombre = localStorage.getItem('miNombre')
console.log(miNombre)
const arrFrutas = localStorage.getItem('frutas')
console.log(arrFrutas)
console.log(localStorage.getItem('plátano'))

//* ========================================== *//
//* ========================================== *//

//? Para solucionar los "problemas" con los arrays y los objetos, usamos otro objeto que también viene con JavaScript que se llama JSON


//* 3.-  Convertir cualquier cosa en un "STRING AUTÉNTICO" --> JSON.stringify()

const frutasString = JSON.stringify(frutas)
console.log(frutasString)

const objString = JSON.stringify(obj)
console.log(objString)

// ahora ya lo podríamos meter en localStorage
localStorage.setItem('misFrutas', frutasString)
localStorage.setItem('miPlátano', objString)


//* 4.- Conseguir convertir strings en OBJETOS y ARRAYS AUTÉNTICOS --> JSON.parse()
const miPlatanoString = localStorage.getItem('miPlátano')
const platanoObjReal = JSON.parse(miPlatanoString)
console.log(platanoObjReal)

const misFrutasString = localStorage.getItem('misFrutas')
const misFrutasArrReal = JSON.parse(misFrutasString)
console.log(misFrutasArrReal)


//? EXTRA

// eliminar UN ELEMENTO de localStorage
localStorage.removeItem('miEdad')

// eliminar todo lo que hay en localStorage
// localStorage.clear()
