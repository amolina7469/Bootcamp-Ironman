const form1 = document.querySelector('.form1')
const output = document.querySelector('.output')



form1.addEventListener('submit', event => {
  event.preventDefault()
  
  const num1 = Number(form1.primerNum.value)
  const num2 = Number(form1.segundoNum.value)
  let resultado = 0
 
  if (event.submitter.name === 'suma'){
   resultado = num1 + num2
} else if (event.submitter.name === 'resta'){
   resultado = num1 - num2
} else if (event.submitter.name === 'multiplicacion'){
   resultado = num1 * num2
} else if (event.submitter.name === 'division'){
   resultado = num1 / num2
  }
  output.innerText = resultado
})


