const newH1 = document.createElement('h1')
newH1.innerText = 'Nuevo H1'
const body = document.querySelector('body')
body.append(newH1)

const newButton = document.createElement('button')
newButton.innerText = 'Haz click aquí'
newH1.after(newButton)

newButton.classList.add('rounded')
newButton.style.backgroundColor = 'tomato'
newButton.style.color = 'white'
newButton.setAttribute('data-id', '12345')


newH1.setAttribute('title', 'Soy un título') // h1.title = 'Soy un título'  otra forma de hacerlo