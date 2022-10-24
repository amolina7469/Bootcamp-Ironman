//? Arrays -->Sirven para guardar varios valores dentro de una misma variable

const usuario1= 'Ivan'
const usuario2= 'Nacho'
const usuario3= 'Paco'

const usuarios = ['Ivan', 'Nacho', 'Lorena']
console.log(usuarios)


//En un array podemos guardar lo que nos de la gana, aunque no tiene sentido

const arrayLibre = ['👨‍🦲', true,23.56, 'Rocío', false, undefined,[1,5]]
console.log(arrayLibre)

//* Todos los arrays tienen una propiedad "length" que nos da la longitud del array

console.log(arrayLibre.length)
console.log(usuarios.length)

//* Leer datos de un array --> utilizamos el corchete[]
//! La primera posición es 0
//! La última es array.lenght -1

const frutas = ['🍎','🍌','🍍','🥭',['🍊','🍉']]
console.log(frutas)
console.log(frutas[0])
console.log(frutas[2])
console.log(frutas[1])
console.log(frutas[50])//undefined


console.log(frutas[4])
console.log(frutas[4][1])// valor del array 1 dentro del array 4


//* Escribir datos en un array 

let nombre= 'Freya'

nombre='Kira'

frutas[1]='🥑' // Cambiamos el plátano por el aguacate
console.log(frutas)

frutas[5]='🍌'
console.log(frutas) // Ponemos el plátano en un array nuevo, en este caso el 5

frutas[frutas.length] ='🥝'// Ponemos el kiwi en la siguiente posición libre
console.log(frutas) 

frutas[100]='🍇'// Cuidado porque podemos añadir en cualquier posición, incluso muy lejanas
console.log(frutas) 



//* Los strings se comportan parecidos a los arrays en dos cosas
  //* 1. Tienen una propiedad length
  //* 2. Podemos ver o trabajar con cualquier caracter del string usando corchetes[]

  const frase= 'Plátano'
  console.log(frase.length)
  console.log(frase[0]) //'p'
  console.log(frase[3]) //''
  frase[0]='A' //! No se puede
  console.log(frase)


//*==============================================*//


//* Cread un array con 3 marcas de coche
const marcasCoches = ['Peugeot','Volkswagen','Audi']
console.log(marcasCoches)
//* añadid una extra después de la última
marcasCoches[marcasCoches.length]= 'Fiat'
console.log(marcasCoches)
//* que salga en consola la tercera marca
console.log(marcasCoches[2])
//* añade después del último un NUEVO ARRAY con 2 marcas más
marcasCoches[marcasCoches.length]=['Seat', 'Lexus']
console.log(marcasCoches)
//* que salga en consola la segunda marca de este nuevo array pequeño
console.log(marcasCoches[4][1])
//* duplicad este array de 2 marcas dentro de una nueva variable con el Spread Operator
const nuevoArray=[...marcasCoches[4]]
console.log(nuevoArray)
// [X X X X [X X]]
// [X X]
