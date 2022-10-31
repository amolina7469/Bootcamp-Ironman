const nombre = 'Ivan'

const sumar = (num1, num2) => {
  return num1 + num2
}

const restar = (num1, num2) => {
  return num1 - num2
}

const multiplicar = (num1, num2) => {
  return num1 * num2
}

export const dividir = (num1, num2) => { // También se puede exportar en la misma línea
  return num1 - num2
}

export default nombre

export { sumar, restar, multiplicar }


