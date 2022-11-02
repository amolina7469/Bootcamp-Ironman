//? DOM - Document Object Model
//* Cadas nodo forma parte de un árbol que etsá unido entre sí
// * Cada nodo del DOM (element, ettribute, text, comment) Javascript lo considera un objeto (con sus propiedades y sus métodos)
//* Los nodo que más conocemos y más usaremos son los de tipo ELEMENTO (h1, div, section, body)

//*=================================*//

//* Cazar elemntos DOM

const miH1 = document.getElementById('miTitulo')
console.log(miH1)
console.log(miH1.clientWidth)
console.log(miH1.id)

//cazar por culaquier SELECTOR CSS --> Un sólo elemento
//! OJO! porque siempre te va a devolver el primero que coincida
const tercerLi= document. querySelector('ul li:nth-child(3)')
  console.log(tercerLi)

//cazar por culaquier SELECTOR CSS --> todos los elementos que coincidan
const todosLosLi = document.querySelectorAll('li')
  console.log('todosLosLI')

//querySelector tiene la particularidad de poder utilizarlo no sólo en "document" sino en cualquier elemento que hayas cazado previamente.

const segundaLista = document.querySelector('.segunda-lista')

const unLi = segundaLista.querySelector('li')
  console.log(unLi)

// * ======================================== *//

//* info que puedo leer o modificar de un elemento

//? su ID

console.log(miH1.id)
  
miH1.id = 'otroId'
console.log(miH1.id)

//? otras infos que son fáciles de encontrar

 // id
 // name
 // title
 // src
 // type
 // value
 // alt


//? sus clasaes --> 2 formas

//* directamnete viendo todo su string de clases

console.log(segundaLista.className)

segundaLista.className = 'text center mt-5 d-flex'
console.log(segundaLista.className)

//! className no lo usaremos cuando queramos por ejemplo añadir una clase a un elemento o quitarla

segundaLista.className += ' p0'
console.log(segundaLista.className)

//* para hacerlo más individual, utilizamos classList y todos sus métodos
// para añadir una clase
segundaLista.classList.add('mt-3', 'border', 'border-danger')
console.log(segundaLista.className)

// para quitar una clase
//! no da error si la clase que le pasas no existe
segundaLista.classList.remove('border', 'border-danger')
console.log(segundaLista.className)

//para intercmabiar una clase
segundaLista.classList.replace('p-0', 'p-3')


//para quitar o añadir una clase dependiendo si ya está puesta o no
segundaLista.classList.toggle('shadow') // aquí la pone
segundaLista.classList.toggle('shadow') // aquí la quita



//para saber si un elemento tiene una clase o no
segundaLista.classList.contains('d-flex') // true
segundaLista.classList.contains('row') // false

// * ======================================== *//

//? su contenido de texto

  console.log(miH1.innerText)
  console.log(miH1.innerHTML)

  //si quiero el texto sin respetar el html usamos innerText

  miH1.innerText = 'Texto cambiado desde <em>Javascript</em>'
  miH1.innerHTML = 'Texto cambiado desde <em>Javascript</em>'

  //aquí vemos como puedo crear elementos del Dom desde javascript facilmente
  const terceraLista = document.querySelector('.tercera-lista')
 terceraLista.innerHTML = `<li>hola</li>
 <li>adios</li>`

 //? cambiar o ller sus taributos
 const input = document.querySelector('input[type = text]')

 // leer atributo
   console.log(input.getAttribute('type'))
   console.log(input.getAttribute('maxlength'))
 
//crear o modificar un atributo
  input.setAttribute('placeholder', 'Escribir aquí...')
  input.setAttribute('maxlength', '15')

//eliminar un atributo
    input.removeAttribute ('maxlength')
  // input.removeAttribute('placeholder')

//? sus estilos CSS directamente desde javascript
//! cambiar sus estilos con Javascript es lo mismo que poner el atributo style en linea directamente desde el html

input.style.border = '2px solid crimson'

//! todas las propiedades que pongamos desde javascript no tienne guiones se sustituye por camelCase
const medida = 40
input.style.backgroundColor = 'pink'
input.style.paddingInline = `${medida}px`

//* para evitar problemas al añadir estilos CSS desde javascript, lo más común es crear clases varias en tu archivo CSS y darle esas clases en Javascript
miH1.classList.add('color-rojo')

// * ======================================== *//
// * ======================================== *//

//* Crear elementos en el DOM que no existían

// 1. Crear una nueva etiqueta HTML en memoria
  const nuevoArticle = document.createElement('article')
    console.log(nuevoArticle)
  
// 2. Añadirle clases, id, atributos, estilos,...
nuevoArticle.classList.add('noticia', 'text-center')
nuevoArticle.id = 'mi-noticia'

// 3. Añadirle el contenido que quieras
nuevoArticle.innerText = 'Noticia 1'

// 4. Añadir elemento en el DOM
//! Siempre necesitamos un elemento de referencia para decirle donde ponemos el nuevo
const seccionNoticias = document.querySelector('.seccionNoticias')

//luego le decimos en que lugar del elemento lo colocamos (4 formas)

seccionNoticias.append(nuevoArticle) // lo pone al final de la caja
seccionNoticias.prepend(nuevoArticle) // al principio de la caja
seccionNoticias.after(nuevoArticle) // después pero fuera de la caja
seccionNoticias.before(nuevoArticle) // antes pero fuera de la caja

// Lo de antes va bien pero cuando tenemos que crear cosas muy estensas con muchas etiquetas puede ser un engorro

//* para ahcerlo más rápido podemos utilizar el innerHTML como se explicó anteriormente
const miArticulo = document.createElement('article')
miArticulo.className = `d-flex justify-content-center`

