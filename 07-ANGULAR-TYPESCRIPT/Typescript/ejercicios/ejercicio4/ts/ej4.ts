//Vamos a crear una aplicacion que me permita generar calculadoras de diferentes marcas. Cada calculadora que yo cree tiene que implementar obligatoriamente tres metodos sumar, restar, multiplicar a parte de poder recibir la marca de la calculadora, CASIO.
//Clase Calculadora


interface ICalculadora {
  marca: string;
  sumar(pNumero : number, pNumero2: number) : number;
  restar(pNumero :number, pNumero2:number) : number;
  multiplicar(pNumero:number, pNumero2:number) : number;
  
}


class Calculadora {
  
  marca:string  = "";
  
  constructor(pMarca: string){
    
    this.marca = pMarca;
    
  }
  
sumar(pNumero: number, pNumero2: number) : number {
  const resultado :number = pNumero + pNumero2;
  return resultado
}

restar(pNumero: number, pNumero2: number) : number {
  const resultado :number = pNumero - pNumero2;
  return resultado
}

multiplicar(pNumero: number, pNumero2: number) : number {
  const resultado :number = pNumero * pNumero2;
  return resultado
}

}




let respuesta: string | null
do {
  
  const marcaCalculadora: string | null = prompt('Dime la marca de la calculadora que vas a crear:')
  const calculadora1 = new Calculadora(marcaCalculadora)
  console.log(calculadora1)

  respuesta = prompt(`¡Bienvenid@ a la calculadora ${calculadora1.marca}
  ¿Qué quieres hacer?
  (s) sumar
  (r) restar
  (m) multiplicar
  (X) salir`)
  
  switch(respuesta){
  
    case 's':{
      
      const numero = Number(prompt('Dime un número:'));
      const numero2 = Number(prompt('Dime otro número:'));
      const resultado = calculadora1.sumar(numero, numero2)
      console.log(resultado)
      break
    }
    case 'r':{
      const numero = Number(prompt('Dime un número:'));
      const numero2 = Number(prompt('Dime otro número:'));
      const resultado = calculadora1.restar(numero, numero2)
      console.log(resultado)
      break
    }
    case 'm': {
      const numero = Number(prompt('Dime un número:'));
      const numero2 = Number(prompt('Dime otro número:'));
      const resultado = calculadora1.multiplicar(numero, numero2)
      console.log(resultado)
      break
    }
  }
} while (respuesta != 'x');




