
// //* Bucles 01

// for(let i=0; i<=30; i+=3){

//   console.log(i)
// }

// //* Bucles 02

// for(let i=0; i<= 10; i++ ){

//   resultado=(8*i)
//   console.log(`8 x ${i}:`,resultado)

// }

// //* Bucles 03

// for(let i=0; i<=20; i++){

//   if(i%2===0){

//     console.log(`${i} es un número par`)

//   }else{

//     console.log(`${i} es un número impar`)

//   }
// }

//* Bucles 04

// let frase=prompt('Introduce una frase')
// let contador
// console.log(frase)
// console.log(frase.indexOf('a'))
// console.log(frase.length)

// for(let i=0; i<=frase.length; i++){
//   console.log(frase[i].indexOf('a'))
//   if(frase[i].indexOf('a')<=0){
//     contador++
//   }
  
//   console.log(contador)
// }


//* Bucles 05

for(let i=1; i<=50; i++){

if((i%3==0)&&(i%5==0)){

console.log('FizzBuzz')
}else if(i%5==0){
  
  console.log('Buzz')
  
}else if(i%3==0){
  
  console.log('Fizz')
  
}else{
  
  console.log(i)

}


}