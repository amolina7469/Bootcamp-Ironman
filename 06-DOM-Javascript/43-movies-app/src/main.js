// mini "base de datos"
const allMovies = [
  // {
  //   id: 1, 
  //   title: 'Harry Potter',
  //   genre: 'Aventuras',
  //   isSeen: true
  // },
  // {
  //   id: 2, 
  //   title: 'Robocop',
  //   genre: 'Acción',
  //   isSeen: false
  // }
]

// Escuchar el submit del formulario


// conseguir los datos que has puesto en los inputs


// revisar que no queden vacíos

// si está todo bien, crearemos un objeto nuevo que meteremos dentro de la base de datos (push)

// crearemos una funcion printMovies() que recorrerá el array de allMovies, creará cada article nuevo con createElement y lo meterá en la sección de movie-list uno detrás de otro


const form = document.querySelector('.main-form')
const movieList = document.querySelector('.movie-list')
console.log(movieList)

form.addEventListener('submit', (event) => addData(event))

const badgeColor = (genre) => {
  switch(genre){
    case 'Aventuras' :{
      return 'text-bg-adventures'
    }
    case 'Acción': {
      return 'text-bg-action'
    }
    case 'Fantasía': {
      return 'text-bg-fantasy'
    }
    case 'Terror': {
      return 'text-bg-horror'
    }
    case 'Comedia': {
      return 'text-bg-comedy'
    }
    case 'Drama': {
      return 'text-bg-drama'
    }
  }
}

const clearSection = (movieList) => {
 movieList.innerHTML = ''
}


const printMovies = (allMovies) => {

  clearSection(movieList)
  allMovies.forEach((film) => {
    const title = film.title
    const genre = film.genre
    const isSeen = film.isSeen
   
    film = document.createElement ('article')
    film.className = "movie d-flex align-items-center gap-3"
    const isSeenIcon = isSeen ? 'icon bi bi-eye text-primary' : 'icon bi bi-eye-slash text-info'
    const genreColor = badgeColor(genre)
    film.innerHTML = `
      <span class="fs-3">${title}</span>
      <span class="badge ${genreColor} me-auto">${genre}</span>
      <i class="${isSeenIcon} fs-4"></i>
      <i class="icon bi bi-trash fs-4 text-danger"></i>
  `
    console.log(film.innerHTML)
    movieList.append(film)
  })
}



const addData = (event) => {
    event.preventDefault()

    const title = form.title.value
    const genre = form.genre.value
    const isWatch = form.isSeen.checked
    let newMovie = {}
    console.log(title, genre, isWatch)
    
    if(title !== '' && genre !== ''){
      
      newMovie = {
        id: allMovies.length + 1,
        title: title,
        genre: genre,
        isSeen: isWatch
      }
    }
    form.reset()
    allMovies.push(newMovie)
    console.log(allMovies)
    printMovies(allMovies)
    }
  
