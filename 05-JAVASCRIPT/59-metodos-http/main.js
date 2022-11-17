const getBtn = document.querySelector('.get')
const postBtn = document.querySelector('.post')
const deleteBtn = document.querySelector('.delete')
const putBtn = document.querySelector('.put')
const patchBtn = document.querySelector('.patch')


const getEntradas = () => {
  console.log('GET')
  // por defecto el fetch SIEMPRE hace una petición GET
  fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
}

const postEntrada = () => {
  console.log('POST')
  const newPost = {
    title: 'mi super post',
    body: 'En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lantejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda.',
    userId: 3
  }

  const opciones = {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(newPost)
  }

  fetch('https://jsonplaceholder.typicode.com/posts/', opciones)
    .then(resp => resp.json())
    .then(data => console.log(data))
}

const deleteEntrada = () => {
  console.log('DELETE')

  const opciones = {
    method: 'DELETE'
  }

  fetch('https://jsonplaceholder.typicode.com/posts/3', opciones)
    .then(resp => resp.json())
    .then(data => console.log(data))
}

const putEntrada = () => {
  console.log('PUT')
  const updatedPost = {
    title: 'Titulo cambiado',
    body: 'Texto del post cambiado',
    userId: 3
  }

  const opciones = {
    method: 'PUT',
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(updatedPost)
  }

  fetch('https://jsonplaceholder.typicode.com/posts/2', opciones)
    .then(resp => resp.json())
    .then(data => console.log(data))
}

const patchEntrada = () => {
  console.log('PATCH')

  const patchPost = { title: 'Nuevo titulo del super mega post' }

  const opciones = {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(patchPost)
  }

  fetch('https://jsonplaceholder.typicode.com/posts/7', opciones)
    .then(resp => resp.json())
    .then(data => console.log(data))

}

getBtn.onclick = () => getEntradas()
postBtn.onclick = () => postEntrada()
deleteBtn.onclick = () => deleteEntrada()
putBtn.onclick = () => putEntrada()
patchBtn.onclick = () => patchEntrada()
