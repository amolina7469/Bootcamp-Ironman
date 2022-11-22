import Destination, {destObject} from "./Destination"
import {getValueAndCheckEmpty} from "../helpers/getvalueandcheckempty"
import createAlertBootstrap from "../helpers/createAlertBootstrap"
import {Modal} from  'bootstrap'

class App {
  allDests: Destination [] = []
  API_URL = 'https://api-de-travels.herokuapp.com/destinations'
  destinationList = document.querySelector('.destination-list')!
  form = document.querySelector('.main-form')!

  constructor () {
   console.log('App iniciada')
   this.changeFavorite = this.changeFavorite.bind(this)
   this.deleteDestination = this.deleteDestination.bind(this)

   this.getAllDestinations()
   this.form.addEventListener('submit', (event) => this.handleAddDestination(event))
}

getAllDestinations () {

  fetch(this.API_URL)
    .then(response => response.json())
    .then(destinations => {
      this.allDests = destinations.map((dest) => {
        const newDest = new Destination(dest, this.changeFavorite, this.deleteDestination, this.updateDestination)
        return newDest
      
      })
      this.printDestinations()
    })
    
}

printDestinations(array = this.allDests) {
this.destinationList.innerHTML = ''
array.forEach((destination) => {
  this.destinationList.append(destination.destinationHTML)
 })
console.log(array)
}

handleAddDestination(event: Event) {
event.preventDefault()
const cityValue = getValueAndCheckEmpty(this.form.city)
const countryValue = getValueAndCheckEmpty(this.form.country)
const urlValue = getValueAndCheckEmpty(this.form.urlPhoto)


if(!cityValue || !countryValue || !urlValue){
  createAlertBootstrap('Ningún campo puede estar vacío.')
  return
} 
this.addDestination(cityValue, countryValue, urlValue)
this.resetForm()
}

addDestination (city: string, country: string, url: string) {
  const newDestObj = {
    city: city,
    country: country ,
    photo: url,
    favorite: false,
    visited: false
  }

  const postOptions = {
    method: 'POST',
    headers: {
      'content-type' : 'application/json; charset=utf-8'
    },
    body: JSON.stringify(newDestObj)
  }

  fetch(this.API_URL, postOptions)
    .then(resp => {
      if (resp.status !== 201) {
        throw new Error('Algo ha ido mal')
      } 
      createAlertBootstrap('Ciudad añadida correctamente. 😃', 'primary')
      this.getAllDestinations()
    })
    .catch((err: Error) => createAlertBootstrap(err.message))


}

resetForm () {
  this.form.reset()
  this.form.city.focus()
}

changeFavorite (dest: Destination)  {
  const patchChanges = { favorite: !dest.favorite }

  const patchOptions = {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(patchChanges)
  }

  fetch(`${this.API_URL}/${dest.id}`, patchOptions)
    .then(resp => {
      if (resp.status !== 200) throw new Error('Algo salió mal.')
      this.getAllDestinations()
    })
    .catch((err: Error) => createAlertBootstrap(err.message))

}

deleteDestination (dest: Destination) {

  const patchOptions = {
    method: 'DELETE'  
  }

  fetch(`${this.API_URL}/${dest.id}`, patchOptions)
  .then(resp => {
    if (resp.status !== 200) throw new Error('Algo salió mal.')
    this.getAllDestinations()
  })
  .catch((err: Error) => createAlertBootstrap(err.message))
  } 
   
updateDestination () {
 console.log('update')
}
 
}


export default App