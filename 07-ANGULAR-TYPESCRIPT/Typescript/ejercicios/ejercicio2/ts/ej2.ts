// dado un número cualquiera aleatorio y entero entre 0 y 10, hacer una aplicación que me devuelva el factorial de numero

// 5 -->5 * 4 * 3 * 2 * 1 =120

//me tiene que devolverpor consola, el factorial y la serie de números

let numero:number = Math.round(Math.random() * 10 );

// let resultado: number = 1
// for(let i = numero; i > 0 ; i--) {
//   resultado = resultado * i;
//   console.log(i)
// }
// console.log(resultado);


interface factorial {
  miFactorial:  number;
  miSerie: number[];
}


function factorial(pNumero: number) : factorial {
  let resultado: number = 1
  const serie: number [] = []
  for(let i: number = numero; i>=1; i--){
    resultado *= i;
    serie.push(i);
  }
return {miFactorial: resultado, miSerie:serie}
}

let respuesta: factorial = factorial(numero);
console.log(respuesta.miFactorial)
console.log(respuesta.miSerie)