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
})// funcióan normal anónima