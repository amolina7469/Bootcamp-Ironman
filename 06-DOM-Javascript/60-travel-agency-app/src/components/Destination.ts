interface destObject{
  id:number,
  city: string,
  country: string,
  photo: string,
  visited:boolean,
  favorite:boolean
}

class Destination {
  id:number
  city: string
  country: string
  photo: string
  visited:boolean
  favorite:boolean
  changeFavorite: Function
  deleteDestination: Function
  updateDestination: Function
  destinationHTML: HTMLElement = document.createElement('article')

  constructor (objDest: destObject, changeFavoriteFn: Function, deleteDestinationFn: Function, updateDestinationFn: Function) {
    this.id = objDest.id
    this.city = objDest.city
    this.country = objDest.country
    this.photo = objDest.photo
    this.visited = objDest.visited
    this.favorite = objDest.favorite

    this.changeFavorite = changeFavoriteFn
    this.deleteDestination = deleteDestinationFn
    this.updateDestination = updateDestinationFn
    this.createHTML()
  }

  createHTML() {

    this.destinationHTML.className = 'destination bg-white shadow'
    const heartIcon = this.favorite ? 'bi-heart-fill': 'bi-heart'
    this.destinationHTML.innerHTML = `<div class="d-flex align-items-center gap-3 py-2 px-3">
    <h2 class="m-0 fs-4">${this.city}</h2>
    <h3 class="m-0 fs-6 badge bg-info fw-normal me-auto">${this.country}</h3>
    <i class="icon edit-icon bi bi-pencil text-success fs-4"></i>
    <i class="icon delete-icon bi bi-trash text-danger fs-4"></i>
  </div>

  <div class="position-relative">
    <img class="destination-photo" src=${this.photo} alt="Foto de ${this.city}">
    <i class="icon favorite-icon bi ${heartIcon} text-danger position-absolute start-0 top-0 ms-2 mt-2"></i>
  </div>`

  const heartIconButton = this.destinationHTML.querySelector('.favorite-icon')!
  heartIconButton.addEventListener('click', () => this.changeFavorite(this))
  const deleteIconButton = this.destinationHTML.querySelector('.delete-icon')!
  deleteIconButton.addEventListener('click', () => this. deleteDestination(this))
  const editIconButton= this.destinationHTML.querySelector('.edit-icon')!
  editIconButton.addEventListener('click', () => this.updateDestination(this))
  }
}

export default Destination
export { destObject }