//? Eventos del DOM

//* Los eventos son iteracciones que generamos con el árbol de elementos del DOM
//* Antes de poder ver estos elementos tenemos que cazar los elementos que queramos escuchar

const boton = document.querySelector('.boton')
const imagen = document.querySelector('.foto')

//* Para hacer algo con un evento necesito un escucahdor al elemento y le decimos que evento escuchar y que hacer

// addEventListener necesita 2 parámetros:
// un string con el tipo de vento a escuchar
//una referencia a una función que se ejecutará cada vez que ocurra el elementpo
// const saludo = () => {
//   console.log('hola')
// }
// boton.addEventListener('click', saludo)

const cambiarImagen = () => {
  imagen.src = 'https://picsum.photos/id/200/300'
}
boton.addEventListener('click', cambiarImagen)

//En lugar de pasarle una ref a una función ya creada, también podemos pasarle una función anónima directamente

const boton2 = document.querySelector('.boton2')
const h1 = document.querySelector('h1')

boton2.addEventListener('click', () => h1.innerText = 'Texto cambiado')// función flecha anónima

// con una función normal

boton2.addEventListener('dblclick', function () {
  imagen.style.outlineColor = 'crimson'
})// función normal anónima

//? otros eventos
const caja = document.querySelector('.caja')
const inputName = document.querySelector('.input-name')


//* animationend  --> cada vez que termine la animación
caja.addEventListener('animationend', () => {console.log('Animacion terminada')})

//* focus y blur  --> cuando entres y salgas del foco
inputName.addEventListener('focus', () => console.log('has hecho foco en el input'))
inputName.addEventListener('blur', () => console.log('has salido del foco del input'))

//* input --> cuando el input cambie de valor
// inputName.addEventListener('input', () => console.log('hola??'))

//* change --> cuando un input cambia de valor
const select = document.querySelector('select')
select.addEventListener('change', () => console.log('has cambiado el select'))

//* submit --> cuando enviemos un formulario

//* keyup --> al levantar una tecla
//* keydown y keypress --> al pulsar una tecla

// inputName.addEventListener('keyup', () => console.log('has levantado una tecla'))
inputName.addEventListener('keydown', () => console.log('has apretado una tecla'))
// inputName.addEventListener('keypress', () => console.log('has apretado una tecla'))


//* mouseover --> al ponerte encima de la imagen
imagen.addEventListener('mouseover', () => console.log('por encima de la imagen'))


//* scroll --> cada vez que se hace scroll
caja.addEventListener('scroll', () => console.log('has hecho scroll en la caja'))

window.console.log('hola desde window')
window.addEventListener('scroll', () => console.log('scroll en la ventana'))