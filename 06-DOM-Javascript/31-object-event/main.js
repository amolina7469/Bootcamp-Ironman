//? Vamos a ver otras maneras de escuchar

const h1 = document.querySelector('h1')
h1.addEventListener('click', () =>   console.log('clic'))

//* Si imprimimos en consola cualquier objeto DOM veremos que tiene muchas propiedades que empiezan por "on"

console.dir(h1)

//Pues cada objeto DOM tiene tantos eventos "on"

h1.onmouseover = () =>   console.log('Por encima')

const saludo = () => {
    console.log('hola')
}
h1.onmouseout = saludo

//! La diferencia más grande es que si utilizo las propiedades "on", no puedo darle más veces al mismo elemento el mismo escuchador

h1.onclick = () =>   console.log('click desde onclick')

//* por último podemos escuchar eventos directamente desde html
// creamos una funcion en nuestro javascript y la llamamos desde html

const handleclick = () => {
  document.body.style.backgroundColor = 'pink'
}
  // * ======================================== *//
  // * ======================================== *//
  
//? Objeto EVENT

//* todos los eventos pasan como primer párametro de la función que se ejecuta en el addEventListener un ojeto de tipo event que da mucha inf del evento

const btnEvent = document.querySelector('.btnEvent')
const inputEvent = document.querySelector('.inputEvent')


btnEvent.addEventListener('click', (evento) =>{
    console.log(evento)
    if(evento.ctrlKey === true){
        console.log('Has apretado ctrl')
      
    }
  
})

document.body.addEventListener('click', (evento) =>{
    console.log(evento.target)
  
})

inputEvent.addEventListener('keydown', (event) =>{
  console.log((event.key))
  if(event.key === 'Enter') {
    inputEvent.style.outline = '2px solid crimson'
  }

})

// si queremos recibir el objeto event utilizando una función ya creada lo hariamos de la siguiente forma


const handleFocus = (event) => {
  console.log(event)
}


inputEvent.addEventListener('focus', (event) => {
  handleFocus(event)
})

inputEvent.addEventListener('focus', (event) => handleFocus(event)) // igual que la anterior pero en versión corta

//* de hecho, si yo llamo a la función y no le paso el evento. Javascript ya sabe que ese evento va intrínseco y lo podemos usar.

const handleEncimaBoton = (event) => {
    console.log(event)
  
}
btnEvent.addEventListener('mouseover', handleEncimaBoton)


// * ======================================== *//
// * ======================================== *//


//* algo muy usado con el evento event es prevenir el comportamiento por defecto

const form = document.querySelector('form')
const link = document.querySelector('a')

form.addEventListener('submit', (event) => {
  event.preventDefault()
    console.log('Formulario enviado')
  
})

link.onclick = (event) => {
  event.preventDefault()
    console.log('clic al link')
  
}