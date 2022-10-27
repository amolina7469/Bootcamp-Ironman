// * RETURN

// const suma = (num1, num2) => { // Función
//   const resultado = num1 + num2
//   return resultado
// }
const suma = (num1, num2) => { // Función haciendo el return de otra forma
  return num1 + num2
}

  // La siguiente función sólo ejecuta código
const hola = () => {
  console.log('hola')
}
hola()

const num1 = Number(prompt('Dime un número'))
const num2 = Number(prompt('Dime otro número'))

// Esto podrían ser 10 lineas de código
// const resultado = num1 + num2

const resultado = suma(num1, num2) // LLamamos a la función y guardamos el valor en la variable "resultado"
console.log(resultado) // Imprimimos la variable

// ? Normas del return
  // * 1. Si a la función no le hemos puesto return, aún así siempre retorna "undefined"
  // * 2. Una función sólo puede tener un return util (todos los demás no se ejecutaran). El return corta la ejecucción de la función

const esPar = (num) => { // Sólo ejecutará uno de lo return
  if (num % 2 === 0) {
    return true
  } else {
    return false
  }
}

