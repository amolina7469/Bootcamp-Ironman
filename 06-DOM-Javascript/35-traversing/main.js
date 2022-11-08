//? Traversing --> Viajar entre elementos del DOM
//! Siempre que viajemos entre elementos USAR LA OPCIÓN QUE PONGA "ELEMENT"
//! Element = etiqueta HTML


const lista1 = document.querySelector('.lista-1')

console.dir(lista1)

//* .children --> me devuelve un array con todos los hijos que sean Elements
lista1.children[2].style.color = 'crimson'


//* .parentElement --> viaja hasta el padre
console.log(lista1.parentElement)
lista1.parentElement.style.backgroundColor = 'rgba(255 0 0 / 0.2)'

//* .firstElementChild  --> Primer hijo del elemento
//* .lastElementChild --> Último hijo del elemento
// El método remove() elimina directamente del DOM el elemento seleccionado
lista1.lastElementChild.remove()
lista1.firstElementChild.style.color = 'royalblue'


//* .nextElementSibling --> Siguiente hermano del elemento
//* .previousElementSibling --> Anterior hermano del elemento

lista1.previousElementSibling.style.color = 'white'


//* esto lo puedo hacer desde donde quiera y cuantas veces quiera
console.log(lista1.firstElementChild.nextElementSibling.parentElement.parentElement.firstElementChild.parentElement.parentElement.firstElementChild.firstElementChild.setAttribute('charset', ''))



//* Ejemplo!

// Cazad el botón que hay abajo y cuando le de click, que cambie el color del h1
//! no se puede cazar el h1
// También que se borre del DOM el párrafo !sin cazarlo!


const button = document.querySelector('.btn')

button.addEventListener('click', () =>  {

button.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.style.color = 'lightseagreen'

button.previousElementSibling.previousElementSibling.previousElementSibling.remove()
})