// CAZAMOS EL FORMULARIO Y LA CAJ
//ESCUCHAMOS EL SUBMIT DEL FORMULARIO
//EVITAMOS QUE SE RECARGUE LA PÁGINA
//PONEMOS CONSOLE.LOG PARA VER QUE TODO OK

const form = document.querySelector('.form')
const bookList = document.querySelector('.book-list')

    console.log(form)
    console.log(bookList)


form.addEventListener('submit', (event) => {
  event.preventDefault()

  let titulo = form.title.value
  let leido = form.isRead.checked
    // console.log(titulo)
    // console.log(leido)
    
   if(titulo.trim() === ''){
    form.title.classList.add('invalid')
    return
   } else {
    form.title.classList.remove('invalid')
    
   }
  //  console.log(titulo)
  //  console.log(form)

 
  const nuevoLi = document.createElement ('li')
  nuevoLi.className= 'book-list_item' 
  nuevoLi.innerHTML= `${titulo} -
  <span class="isRead-icon">📕</span>
  <span class="delete-icon">❌</span>`
  
  nuevoLi.innerText = titulo

  
  let isReadIcon = leido ? '📖' : '📒'

  nuevoLi.innerHTML= `${titulo} -
  <span class="isRead-icon">${isReadIcon}</span>
  <span class="delete-icon">❌</span>`

  nuevoLi.querySelector('.delete-icon').addEventListener('click', () => {
    nuevoLi.remove()
  })
  
  bookList.append(nuevoLi)
 
  
})
