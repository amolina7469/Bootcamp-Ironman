//? POO - Programación Orientada a objetos
//? OOP - Object Oriented Programming


const post1 = {
  // propiedades (información)
  autor: 'leotedescobmxer',
  meGustas: 695,
  foto: 'instgram.com/6546125',
  // métodos (funcionalidad)
  daleAMeGusta: function () { // 0x123
    console.log(this)
    console.log('💖')
  },

  comenta: function () { // 0x234
    console.log('Comentado!')
  },

  enviarPost: function () { // 0x345
    console.log('Post de ' + this.autor + ' enviado')
  }
}

//* THIS
// this hace referencia al objeto que está lanzando el propio "this"

console.log(this) // como este this está fuera de cualquier función/objeto, this siempre será "window" si usamos el navegador y "global" si usamos node

post1.daleAMeGusta() // en este caso, como el console.log(this) está ejecutado dentro del objeto post1, el this hace referencia a post1


// Si quiero otro objeto parecido al anterior pero con diferentes valores tendré que crear un objeto nuevo idéntico, con lo que escribimos mucho extra
const post2 = {
  // propiedades (información)
  autor: 'culturapositiva',
  meGustas: 221161,
  foto: 'instgram.com/6545316845121',

  // métodos (funcionalidad)
  daleAMeGusta: () => { // 0x987
    console.log('💖')
  },

  comenta: () => {
    console.log('Comentado!')
  },

  enviarPost: () => {
    console.log('Post enviado')
  }
}


console.log(post1)
console.log(post2)
post1.enviarPost()
post2.enviarPost()


//* Para no tener que  crearlo literalmente cada vez, usamos lo que llamamos "Clases" --> Fábrica de objetos

class Post {
  autor = 'ivluengo'
  meGustas = 10
  foto = 'instagram.com/+6546+4+'
}

// para crear un nuevo objeto usando una clase (fábrica) utilizamos la palabra "new"
//* Crear un nuevo objeto a partir de una clase, se llama "instanciar" o "crear una instancia de un objeto"
const post3 = new Post()
const post4 = new Post()

// podemos como siempre añadir propiedades, modificarlas, etc
post3.isFavorite = true

console.log(post1)
console.log(post3)
console.log(post4)


//* Para hacer una clase más dinámica, haremos que acepte parámetros por cada objeto que crees (que instancies)

class Story {
  // el constructor se va a ejecutar OBLIGATORIAMENTE en cada INSTANCIA DE LA CLASE
  constructor (autorDelPost, meGustas = 0) {
    this.autor = autorDelPost
    this.meGustas = meGustas
    this.infoMeGustas()
  }

  compartirStory () { // 0x777
    console.log(`Has compartido la story de ${this.autor}`)
  }

  leHanDadoAMeGusta (numeroMeGustas = 1) { // 0x888
    this.meGustas += numeroMeGustas
    this.infoMeGustas()
  }

  infoMeGustas () { // 0x999
    console.log(`${this.autor} tiene ${this.meGustas} likes.`)
  }
}

const story1 = new Story('amancio')

//  { autor : amancio, meGustas: 0 }

const story2 = new Story('alberto', 25)

// {  autor: 'alberto' }

console.log(story1)
console.log(story2)
story1.compartirStory() // 0x777
story2.compartirStory() // 0x777

story1.infoMeGustas()
story1.leHanDadoAMeGusta(7)
story1.leHanDadoAMeGusta()
story1.leHanDadoAMeGusta()
story1.leHanDadoAMeGusta()
story1.leHanDadoAMeGusta()
story1.leHanDadoAMeGusta()

story2.leHanDadoAMeGusta(5)


// A partir de ahora ya podemos entender porqué los strings, numbers, booleans, etc tienen una serie de métodos que pueden utilizar. 
// Porque AL FINAL TODOS LOS VALORES DE JAVASCRIPT SON OBJETOS, creados con una fábrica de "String" otra de "Number" otra de "Array", etc, y solo por ser de cada tipo, tienen disponibles una serie de métodos que pueden utilizar.
const nombre = 'ivan'
console.log(nombre)

const apellido = new String('Luengo')
console.log(apellido)

console.log(nombre.toUpperCase())
console.log(apellido.toUpperCase())
