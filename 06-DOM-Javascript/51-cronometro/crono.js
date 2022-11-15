class Crono {
  
  constructor() {
    this.tiempoInicio = 0
    this.tiempoFinal = 0

  }
startCrono (startTime) {
  this.tiempoInicio = startTime
  console.log(this.tiempoInicio)
  
}

stopCrono(endTime) {
  this.tiempoFinal = endTime
  console.log('end')
  
}

resetCrono()

showCrono()

}

const crono1 = new Crono
console.log(crono1)
