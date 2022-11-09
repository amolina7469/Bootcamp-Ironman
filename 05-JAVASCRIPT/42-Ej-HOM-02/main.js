const peliculas = [
  {
    titulo: 'El Señor de los Anillos',
    genero: ['Aventuras', 'Acción'],
    duracion: 250,
    year: 2001,
    director: 'Peter Jackson'
  },
  {
    titulo: 'Harry Potter',
    genero: ['Aventuras', 'Fantasía'],
    duracion: 151,
    year: 2001,
    director: 'Chris Columbus'
  },
  {
    titulo: 'Troya',
    genero: ['Histórica', 'Acción'],
    duracion: 132,
    year: 2004,
    director: 'Wolfgang Petersen'
  },
  {
    titulo: 'Iron Man',
    genero: ['Ciencia Ficción', 'Acción'],
    duracion: 126,
    year: 2008,
    director: 'Jon Favreau'
  },
  {
    titulo: 'E.T.',
    genero: ['Aventuras', 'Ciencia Ficción'],
    duracion: 115,
    year: 1982,
    director: 'Steven Spielberg'
  },
  {
    titulo: 'Los Goonies',
    genero: ['Aventuras', 'Comedia'],
    duracion: 114,
    year: 1985,
    director: 'Richard Donner'
  },
  {
    titulo: 'Algo Pasa con Mary',
    genero: ['Comedia', 'Comedia Romántica'],
    duracion: 119,
    year: 1998,
    director: 'Bobby Farrelly'
  },
  {
    titulo: 'Hook',
    genero: ['Aventuras', 'Fantasía'],
    duracion: 142,
    year: 1991,
    director: 'Steven Spielberg'
  }

]


//* 1:Vamos a imprimir todas los títulos de las películas con un número delante.

peliculas.forEach((pelicula, i) => {
  console.log(`${i + 1}.-${pelicula.titulo}`)
})


//* 2:Filtra todas las películas que sean más modernas que el año 2000 y imprime el array por consola.

const peliculas2000 = peliculas.filter((pelicula) => {
  return pelicula.year > 2000
})
console.log(peliculas2000)

//* 3:Filtra las películas por genero 'Fantasía'

const peliculasFantasía = peliculas.filter((peli) => {
  return peli.genero.includes('Fantasía')
})
console.log(peliculasFantasía)


//* 4:Vamos a ENCONTRAR una película de 'Wolfgang Petersen' y guardarla en una variable

const peliPetersen = peliculas.find((pelicula) => {
  return pelicula.director === 'Wolfgang Petersen'
})
console.log(peliPetersen)


//* 5:Vamos a MODIFICAR cada duración de las películas y sumarle a todas 100 minutos

console.log(peliculas.map((peli) => {
  return (peli.duracion += 100)
}))

//* 6:Vamos a AÑADIR a todas las películas la propiedad rating que empezará con el valor 5

const ratingPelis = peliculas.map((pelicula) => {
  return { ...pelicula, rating: 5 }
})
console.log(ratingPelis)


//* 7:Vamos a COMPROBAR que exista alguna película por lo menos que sea de Steven Spielberg

const peliSteven = peliculas.some((pelicula) => {
  return pelicula.director === 'Steven Spielberg'
})
console.log(peliSteven)

//* 8:Vamos a COMPROBAR si todas las películas son de más de 100 minutos.

const checkPlus100Min = peliculas.every((pelicula) => {
  return pelicula.duracion > 100
})
console.log(checkPlus100Min)


//* 9:Vamos a ORDENAR las películas según el nombre del director y de la A a la Z.

const orderDirector = [...peliculas].sort((peli1, peli2) => {
  if (peli1.director < peli2.director) return -1
  else if (peli1.director > peli2.director) return 1
  else return 0
})
console.log(orderDirector)

//* 10:Vamos a ORDENAR las películas segun su año de creación, y de más modernas a más antiguas.

// const orderYear = [...peliculas].sort((pelicula1, pelicula2) => {
//   if (pelicula1.year < pelicula2.year) return 1
//   if (pelicula1.year > pelicula2.year) return -1
//   return 0
// })
// console.log(orderYear)

const orderYear = [...peliculas].sort((pelicula1, pelicula2) => {
  return pelicula2.year - pelicula1.year
})
console.log(orderYear)
