const boton = document.querySelector('.dark-light-btn')
const imagen = document.querySelector('.foto')
const body = document.body
const h1 = document.querySelector('h1')
const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2') 
const p3 = document.querySelector('.p3')
let darkModeOn = true


const darkMode = () => {
if(darkModeOn === true){
  body.style.backgroundColor = 'rgb(39, 31, 88)' 
  p1.style.color = 'white'
  p2.style.color = 'white'
  p3.style.color = 'white'
  h1.style.color = 'white'
  imagen.src = 'https://images.unsplash.com/photo-1546561892-65bf811416b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3RhciUyMHdhcnN8ZW58MHx8MHx8&w=1000&q=80'
  imagen.alt = 'Foto de Darth Vader'
  h1.innerText = '¡Te voy a chupar la fuerza!'
  boton.innerText = '🌞'
  boton.style.backgroundColor = 'white'
  darkModeOn = false
} else {
  window.location.reload()
  darkModeOn = true
}
  
}

boton.addEventListener('click', darkMode)



