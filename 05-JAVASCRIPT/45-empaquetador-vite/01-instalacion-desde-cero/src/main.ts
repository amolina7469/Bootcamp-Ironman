import './styles/style.scss'
import { nanoid } from 'nanoid'
import sumar from './helpers/sumar'

const nombre: string = 'ivan'

console.log(nombre)

console.log(sumar(5,4))

document.body.innerHTML += nanoid()
