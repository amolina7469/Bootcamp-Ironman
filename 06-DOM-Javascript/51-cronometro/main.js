import Crono from './crono.js'

const buttons = document.querySelector('.controls')

buttons.addEventListener ('click',(event) =>{
event.preventDefault()
if (event.target.id === 'start'){
    const startTime = Date.now()
    console.log(startTime)
    
} else if (event.target.id === 'stop') {
    const endTime = Date.now()
    console.log(endTime)
     
} else if (event.target.id === 'reset'){
  console.log('reset')
  
   resetCrono()
}
})