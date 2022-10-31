import { createToDo, readToDos, updateToDo, deleteToDo, completeUncompleteToDo } from './functions/crudFunctions.js'

let opcion

do {
  opcion = prompt(`¡Bienvenid@ a mi super lista de tareas  v1.0! 
  (c) CREAR TAREA (create)
  (r) LEER TAREAS  (read)
  (u) ACTAUALIZAR TAREAS  (update)
  (d) BORRAR TAREA  (delete)
  (f) COMPLETAR/DESCOMPLETAR TAREA  
  
  (x) SALIR  
  `)

  if (opcion === 'c') {
    createToDo()
  } else if (opcion === 'r') {
    readToDos()
  } else if (opcion === 'u') {
    updateToDo()
  } else if (opcion === 'd') {
    deleteToDo()
  } else if (opcion === 'f') {
    completeUncompleteToDo()
  } else if (opcion === 'x' || opcion === null) {
    console.log('¡Adios! 👋')
  } else {
    console.error('Esa opción no mola')
  }
} while (opcion !== 'x' && opcion !== null)

