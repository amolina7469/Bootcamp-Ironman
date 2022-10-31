// Mini "base de datos"
// ! array de strings nos da poco juego, siempre jugaremos con un array de objetos
const allToDos = [
  { id: 1, task: 'Pasear a las perras 🐶' },
  { id: 2, task: 'Estudiar Javascript 💻' },
  { id: 3, task: 'Comprar el pan 🥖' }
]
let tarea
let contador = 3

const createToDo = (array, texto) => {
  do {
    tarea = prompt('Introduce la nueva tarea:')
  } while (tarea === null || tarea.trim() === '' || isNaN(tarea) === false)
  contador++
  const newToDo = {
    id: contador,
    task: tarea
  }
  allToDos.push(newToDo)
  console.log(`La tarea ${tarea} se ha añadido correctamente`)
  // readToDos()
}

const readToDos = (array) => {
  console.clear()
  console.log('***ESTAS SON TUS TAREAS***')
  for (let i = 0; i < allToDos.length; i++) {
    console.log(`${allToDos[i].id}: ${allToDos[i].task}`)
  }
}

const updateToDo = (array, texto) => {
  readToDos()

  let idUpdate
  let existe = false
  let newTask

  do {
    idUpdate = Number(prompt('Dime el ID de la tarea que quieres modificar'))
  } while (idUpdate === null)

  for (let i = 0; i < allToDos.length; i++) {
    if (idUpdate === allToDos[i].id) {
      newTask = prompt('Dime la nueva tarea')
      allToDos[i].task = newTask
      console.log(`Has modificado la tarea ${allToDos[i].task} correctamente`)
      existe = true
    }
  }

  if (existe === false) {
    console.error(`El id:${idUpdate} no existe en la base de datos`)
  }
}
const deleteToDo = (array, texto) => {
  let idDelete
  let existe = false

  readToDos()

  do {
    idDelete = Number(prompt('Dime el ID de la tarea que quieres borrar'))
  } while (idDelete === null)

  for (let i = 0; i < allToDos.length; i++) {
    if (idDelete === allToDos[i].id) {
      console.log(`Has borrado la tarea ${allToDos[i].task} correctamente`)
      allToDos.splice(i, 1)
      existe = true
    }
  }

  if (existe === false) {
    console.error(`El id:${idDelete} no existe en la base de datos`)
  }
}


const completeUncompleteToDo = (array, texto) => {
  console.log('completando')
}


export { createToDo, readToDos, updateToDo, deleteToDo, completeUncompleteToDo }
