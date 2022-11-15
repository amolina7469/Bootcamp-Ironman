import ToDo from './ToDo'

class ToDoApp {

  allToDos = []
  constructor () {
    console.log('App iniciada')
    this.form = document.querySelector('.main-form')
    this.toDoList = document.querySelector('.toDo-list')
    this.deleteItem = document.querySelector('.delete-icon')
    this.form.onsubmit = (event) =>this.handleSubmit(event)
    this.deleteItem.onclick = () =>this.deleteToDo(ToDo.id)
    }

    handleSubmit (event) {
      event.preventDefault()
      const toDoTask = this.form.toDoInput.value
      this.getInputValueAndCheckEmpty(toDoTask)
    }

    getInputValueAndCheckEmpty(toDoTask) {
      if (toDoTask.trim() === '') {
        this.form.toDoInput.classList.remove('ring-purple-400')
        this.form.toDoInput.classList.add('ring-red-700')
        return
      } else {
        this.form.toDoInput.classList.add('ring-purple-400')
        this.form.toDoInput.classList.remove('ring-red-700')
        this.createToDo(toDoTask)
      }
    }

    createToDo(newToDo) {
      const ToDo1 = new ToDo(newToDo)
      this.task = newToDo
      console.log(ToDo1)
      this.allToDos.push(ToDo1)
      console.log(this.allToDos)
      this.printToDos()
    }

    printToDos(allToDos) {
      this.toDoList.innerHTML = ''
      console.log(this.toDoList)
      
      this.allToDos.forEach((ToDo) => {
        const toDoHTML = this.createToDoMarkup (ToDo)
        this.toDoList.append(toDoHTML)
        
      })
    }
    createToDoMarkup(ToDo) {
      const toDoMarkup = document.createElement('article')
      const checkIcon = ToDo.isCompleted ? 'fa-solid fa-circle-check' : 'fa-regular fa-circle'
      const textStyles = ToDo.isCompleted ? 'text-gray-300 line-through' : ''
      toDoMarkup.className = 'toDo bg-white py-3 px-5 flex items-center border-b-2 border-b-gray-200 hover:bg-gray-50'
      
      toDoMarkup.innerHTML = `<i class="checkIcon ${checkIcon} cursor-pointer hover:scale-110 transition-transform"></i>
      <span class="ml-3 mr-auto ${textStyles}">${ToDo.task}</span>
      <i class="fa-solid fa-xmark cursor-pointer hover:scale-110 transition-transform"></i>`
      
      return toDoMarkup
    }
    deleteToDo(ToDo) {
     
          this.ToDo.splice(ToDo.id,1)
          printToDos()
     
    }
  }
  


export default ToDoApp
