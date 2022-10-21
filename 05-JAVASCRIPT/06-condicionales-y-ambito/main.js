//? Condicionales en Javascript

const num1 = 14
const num2 = 15
const num3 = 21
const nombre = 'Lorena'


//*   if.....  --> Si se cumple ESTO...haz ESTO

/*    if (Si se cumple esto)  {
        haz esto
      }
*/
// Javascript dentro del paréntesis siempre ESPERA UN TRUE O UN FALSE. Si la respuesta es true, entrará dentro del bloque del if, y si no, no entrará.
if (true) {
  console.log('🐈')
}

if (false) {
  console.log('🐕')
}

//? Operadores condicionales

//* Mayor que...    >
if (num3 > num2) {
  console.log(num3 + ' es mayor que ' + num2)
}

if (num2 > num3) {
  console.log(num2 + ' es mayor que ' + num3)
}
//* ========================================== *//


//* Menor que...   <
if (num2 < num3) {
  console.log(num2 + ' es menor que ' + num3)
}

//* Mayor o igual que...     >=
if (num3 >= num2) {
  console.log(num3 + ' es mayor o igual que ' + num2)
}

//* Menor o igual que...     <=
if (num3 <= num2) {
  console.log(num3 + ' es menor o igual que ' + num2)
}



//* Igual que....       ==
if (num1 == num2) {
  console.log('==  ->' , `${num1} es igual que ${num2}`)
}
//! los 2 iguales solo comprueban si los VALORES de las variables son iguales, le da igual el tipo de valor que sean  

//* ========================================== *//


//* Igual que...PERO DE VERDAD DE LA BUENA      ===
if (num1 === num2) {
  console.log('===  ->' , `${num1} es igual que ${num2}`)
}

if (nombre === 'Ivan') {
  console.log('Hola Ivan')
}

if (typeof num1 === 'number') {
  console.log('La variable num1 es de tipo Number')
}

if (typeof num1 === 'string') {
  console.log('La variable num1 es de tipo String')
}

//* ========================================== *//


//*  Distinto que...      !=
if (num1 != num2) {
  console.log('!=  ->' , `${num1} y ${num2} son distintos`)
}

//* Distinto que...PERO DE VERDAD DE LA BUENA    !==
if (num1 !== num2) {
  console.log('!==  ->' , `${num1} y ${num2} son distintos`)
}

//* ========================================== *//

/*
      RESUMEN
      >    -->  Mayor que
      >=   -->  Mayor o igual que
      <    -->  Menor que
      <=   -->  Menor o igual que
      ===  -->  Igual que, pero de verdad
      !==  -->  Distinto de, pero de verdad
*/


//* ========================================== *//

//* Podemos añadir más preguntas en los mismos paréntesis con los operadores:
    // &&   -->   AND
    // ||   -->   OR


//* AND -->   &&
// Cuando preguntamos con el AND, necesita que LOS DOS LADOS SEAN true para que TODO SEA true

//                   true
//        true                    true   
if (nombre === 'Ivan' && typeof num1 === 'string') {
  console.log(`La variable nombre contiene el "string" "Ivan" y num1 es de tipo "string"`)
}



//* OR -->   || 
// Cuando usamor OR, le da igual qué lado de los dos sea true, SOLO CON QUE TENGA UNO, todo será true


//                   false
//         false                 false
if (nombre === 'Carlos' || typeof num1 === 'string') {
  console.log(`La variable nombre contiene el "string" "Ivan" O también puede ser que num1 sea de tipo "string"`)
}


//                                              true
//                       false                   ||               true    
//           false     ||            false                         ||                true
//          false             false                 true                    true            true 
if (nombre === 'Carlos' || num1 > num2 && typeof nombre === 'string' || num3 > num2 && num2 % 3 === 0) {
  console.log('Se cumple todo')
}


//* ========================================== *//

//*  else if.......    -->  EN CAMBIO, SI SE CUMPLE ESTO...HAZ ESTO
//! No puede existir un else if... si no hay un if primero 
//! Puedes añadir todos los else if... que quieras, pero solo un if

/*
      if (se cumple esto) {
        haz esto
      } else if (se cumple esto otro) {
        haz esto otro
      } else if (se cumple esto otro) {
        haz esto otro
      }
*/

// Podríais decir que "¿Por qué no hacer dos "ifs" seguidos?
//! Javascript SIEMPRE VA A PREGUNTAR POR TODOS LOS IFS QUE VEA, en cambio los else if SOLO LOS VA A PREGUNTAR SI NO SE CUMPLE EL PRIMER IF


// si el nombre es 'Ivan' ya no va a entrar en ningún otro
if (nombre === 'Ivan') {
  console.log('Hola, Ivan')
} else if (nombre === 'Alberto') {
  console.log('Hola, Alberto')
} else if (nombre === 'Rocío') {
  console.log('Hola, Rocío')
}


// aunque el nombre sea 'Ivan' va a preguntar los dos siguientes ifs, aunque ya sepamos que no pueden ser verdad
if (nombre === 'Ivan') {
  console.log('Hola, Ivan')
} 

if (nombre === 'Alberto') {
  console.log('Hola, Alberto')
} 

if (nombre === 'Rocío') {
  console.log('Hola, Rocío')
}


//* else.....  -->   Si NO SE HA CUMPLIDO NADA DE LO ANTERIOR...entonces haz esto
//! el else puede estar solo con un IF   o con IF y ELSE IF

/*
      if (se cumple esto) {
        haz esto
      } else {
        si no se ha cumplido el if, haz esto
      }


       if (se cumple esto) {
        haz esto
      } else if (en cambio, si se cumple esto) {
        haz esto otro
      } else if (en cambio, si se cumple esto) {
        haz esto otro
      } else if (en cambio, si se cumple esto) {
        haz esto otro
      } else {
        si no se cumple ninguno de los anteriores, haz esto
      }
*/

if (num3 % 2 === 0) {
  console.log(num3 + ' es par')
} else {
  console.log(num3 + ' es impar')
}


if (nombre === 'Ivan') {
  console.log('¿Qué pasa, Ivan?')
} else {
  //! Cuidado donde ponemos el else porque se ejecutará SIEMPRE QUE NO SE CUMPLA EL IF, le da igual los valores de las variables o lo que sea
  console.log('¿Qué pasa, Ronald?')
}


if (nombre === 'Ivan') {
  console.log('Hola, Ivan')
} else if (nombre === 'Alberto') {
  console.log('Hola, Alberto')
} else if (nombre === 'Rocío') {
  console.log('Hola, Rocío')
} else {
  console.log('Hola, amig@')
}

//* ========================================== *//

//* EXTRA 1: Javascript interpreta algunos valores como VERDADEROS ("truthy") y otros como falsos ("falsy")
/*
        true        -->     true
        'hola'      -->     true
        3845        -->     true
        []          -->     true
        {}          -->     true
        undefined   -->     false
        null        -->     false
        false       -->     false
        ''          -->     false
        0           -->     false
        */
       
let estaCasado = false   
        
if (estaCasado === true) {
  console.log('✅')
} else {
  console.log('❌')
}

if (estaCasado) {
  console.log('✅')
} else {
  console.log('❌')
}


//* EXTRA 2: Si utilizamos el signo de admiración delante de cualquier valor, lo estamos invirtiendo

if (estaCasado === false) {
  console.log('A qué esperas, cásate ya!')
}
   
//! SIEMPRE QUE VERAS UNA ADMIRACIÓN TRANSFÓRMALA EN LA PALBRA ¡NO!
if (!estaCasado) {
  console.log('A qué esperas, cásate ya!')
}


//* EXTRA 3: Si lo que se va a ejecutar en el if, else if o el else es de una sola línea, podemos quitar las llaves

if (estaCasado) console.log('✅')
else console.log('❌')

if (num1 > 0)       console.log('num1 es positivo')
else if (num1 < 0)  console.log('num1 es negativo')
else                console.log('num1 es 0')


//* ========================================== *//

console.log('=======================================')
//* Switch
// Utilizadlo, en todo caso, para casos en los que tengamos unos valores concretos y queramos ejecutar diferentes códigos segun esos valores concretos

const color = 'butano'

if (color === 'rojo') {
  console.log('El color de la pasión 💘')
} else if (color === 'verde') {
  console.log('El color de la esperanza 🥦')  
} else if (color === 'amarillo') {
  console.log('El color del Sol 🌞')
} else if (color === 'azul') {
  console.log('El color del mar 🌊')
} else if (color === 'naranja' || color === 'butano') {
  console.log('Color butano ⛽')
} else {
  console.log('No has escogido ningun color molón.')
}


switch (color) {

  case 'rojo': {
    console.log('El color de la pasión 💘')
    break
  }

  case 'verde': {
    console.log('El color de la esperanza 🥦') 
    break
  }

  case 'amarillo': {
    console.log('El color del Sol 🌞')
    break
  }

  case 'azul': {
    console.log('El color del mar 🌊')
    break
  }

  case 'naranja': 
  case 'butano' : {
    console.log('Color butano ⛽')
    break
  }
  default: {
    console.log(`${color} no es un color molón`)
  }

}
