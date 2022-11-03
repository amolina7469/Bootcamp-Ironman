const boton = document.querySelector('.toggle-button')
const sidebar = document.querySelector('.sidebar')
const icon =document.querySelector('toggle-button > i ')

let isOpen = false

const openSidebar = () => {
sidebar.classList.toggle('open')

if (isOpen === false) {
  icon.classList.replace = ('bi-list', 'bi-x-lg')
 } else {
  icon.classList.replace = ('bi-x-lg', 'bi-list')
 }
}
boton.addEventListener('click', openSidebar)

