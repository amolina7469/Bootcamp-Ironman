// mini "base de datos"
let allMovies = [
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


const form = document.querySelector('.main-form')
const movieList = document.querySelector('.movie-list')


form.addEventListener('submit', (event) => addData(event))
// form.addEventListener('submit',  addData) también se podrái escribir asi pero addData tendría que estar arriba

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

const changeSeeMovie = (event, movie) => {
movie.isSeen = !movie.isSeen
printMovies(allMovies) 
}

const printMovies = (allMovies) => {
  clearSection(movieList)
  allMovies.forEach((movie) => {

    film = document.createElement ('article')
    film.className = "movie d-flex align-items-center gap-3"
    const isSeenIcon = movie.isSeen ? 'icon bi bi-eye text-primary' : 'icon bi bi-eye-slash text-info'
    const genreColor = badgeColor(movie.genre)
    film.innerHTML = `
      <span class="fs-3">${movie.title}</span>
      <span class="badge ${genreColor} me-auto">${movie.genre}</span>
      <i class="eyeIcon ${isSeenIcon} fs-4"></i>
      <i class="trashIcon icon bi bi-trash fs-4 text-danger"></i>
  `
  const eyeIcon = film.querySelector('.eyeIcon')
  const trashIcon = film.querySelector('.trashIcon')
  eyeIcon.addEventListener('click', (event) => changeSeeMovie(event, movie))
  trashIcon.addEventListener('click', (event) => deleteMovie(event,movie))
  movieList.append(film)
})
}

const deleteMovie = (event, movie) => {
  allMovies.forEach((movieDel, index)=> {
    if(movie.id === movieDel.id){
      allMovies.splice(index, 1)
    }
  })
  printMovies(allMovies) 
}

const addData = (event) => {
    event.preventDefault()

    const title = form.title.value
    const genre = form.genre.value
    const isWatch = form.isSeen.checked
    let newMovie = {}
    
    if(title !== '' && genre !== ''){
      form.title.classList.remove('is-invalid')
      form.genre.classList.remove('is-invalid')
      newMovie = {
        id: allMovies.length + 1,
        title: title,
        genre: genre,
        isSeen: isWatch
      }
    } else {
      console.log('Hay que poner los datos')
      form.title.classList.add('is-invalid')
      form.genre.classList.add('is-invalid')
      return
    }
    form.reset()
    allMovies.push(newMovie)
    localStorage.setItem('MOVIES', JSON.stringify(allMovies))
    printMovies(allMovies)
    }
  
const moviesFromLS = localStorage.getItem('MOVIES')
if (moviesFromLS === null) {
  allMovies = []
} else {
  allMovies = JSON.parse(moviesFromLS)
}

printMovies(allMovies)