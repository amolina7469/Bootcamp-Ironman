// let nota

// nota=prompt('Introduce un nota del 0 al 10:')


// if(nota==null){

//   console.log('No has introducido la edad')

// }else{

// if ((nota > 5)&&(nota < 11)) {
//   console.log('Aprobado')
// } else if (nota == 5) {
//   console.log('Aprobado por los pelos')
// } else if ((nota < 5) && (nota > -1)) {
//   console.log('Suspenso')
// }else {
//   console.log('El número introducido no es correcto')

// }}


//*=========================================


let numero

numero=prompt('Introduce un número entero:')

if((numero==null)||(numero==0)|| typeof numero=='string'){

  console.log('No has introducido un número')

}else{

if(numero > 0){

console.log('Es un número positivo')}
else{
  
console.log('Es un número negativo')

}}

//*=========================================

// let edad


// edad=prompt('¿Qué edad tienes?')
// console.log(edad)

// if((edad==null) || (edad==0) || typeof mes=='string'){

//   console.log('No has introducido la edad')

// }else{

// if ((edad>0)&&(edad < 6)){

//   console.log('La entrada es gratuita')

// }else if ((edad >=6)&& (edad<=13)){
  
//   console.log('La entrada cuesta 4€')

// }else if ((edad >=14)&& (edad<=65)) {

//   console.log('La entrada cuesta 7€')

// }else if ((edad>65)&& (edad<150)){

//   console.log('La entrada es gratuita')
  
// }else{
  
//   console.log('La edad introducida no es posible')

// }}


//*===========================================================

// let dia 

// dia=prompt('¿Qué día de la semana es?')

// switch(dia){

// case 'Lunes':{

//   console.log('Hoy hay pescado')
//   break
// }

// case 'lunes':{

//   console.log('Hoy hay pescado')
//   break
// }

// case 'Martes':{

//   console.log('Hoy hay lentejas')
//   break
// }
// case 'martes':{

//   console.log('Hoy hay lentejas')
//   break
// }

// case 'Miércoles':{

//   console.log('Hoy hay filete con patatas')
//   break
// }
// case 'miércoles':{

//   console.log('Hoy hay filete con patatas')
//   break
// }

// case 'Miercoles':{

//   console.log('Hoy hay filete con patatas')
//   break
// }
// case 'miercoles':{

//   console.log('Hoy hay filete con patatas')
//   break
// }
// case 'Jueves':{

//   console.log('Hoy hay arroz')
//   break
// }
// case 'jueves':{

//   console.log('Hoy hay arroz')
//   break
// }


// case 'Viernes':{

//   console.log('Hoy hay sopa')
//   break
// }
// case 'viernes':{

//   console.log('Hoy hay sopa')
//   break
// }
// case 'Sábado':{

//   console.log('Hoy hay pizza')
//   break
// }
// case 'sábado':{

//   console.log('Hoy hay pizza')
//   break
// }

// case 'Sabado':{

//   console.log('Hoy hay pizza')
//   break
// }
// case 'sabado':{

//   console.log('Hoy hay pizza')
//   break
// }

// case 'domingo':{

//   console.log('Hoy se come en el bar')
//   break
// }
// case 'Domingo':{
  
//   console.log('Hoy se come en el bar')
//   break
// }
// default:{
//   console.log('No has introducido un día de la semana')

// }
// }


//*============================================================ */

// let mes 

// mes=prompt('Introduce un número de mes (1 al 12):')



// if((mes==null) || (mes<=0) || (mes>12) || typeof mes=='string' ){

//   console.log('El dato no es valido. Introduce un número del 1 al 12.')

// }else{

//     if(mes==2){

//       console.log('El mes tiene 28 días')
//     }if(mes%2!=0){
      
//       console.log('El mes tiene 30 días')

//     }else{

//       console.log('El mes tiene 31 días')

//     }



// }


//*==================================================================


// let hora
// let min
// let seg

// hora=prompt('Introduce la hora:')
// min=prompt('Introduce los minutos:')
// seg=prompt('Introduce los segundos:')


// if((hora>0 && hora<=24)&&(min>0 && min<=59)&&(seg>0 && seg<=59) || typeof hora=='string' || typeof min=='string' ||typeof seg=='string'){


// }

// console.log(hora,minutos,segundos)
