import './styles/style.css'

const h2 = document.createElement('h2')

const myBoolean = false

h2.className = `${myBoolean ? 'bg-red-800' : 'bg-red-100'} text-2xl`
h2.innerText = 'Título h2 desde Javascript'

document.body.append(h2)
