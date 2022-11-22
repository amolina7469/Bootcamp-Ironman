/* typescript añade tipado fuerte a javascript, ojo no es obligatorio. Aunque Angular tendrá typescript en modo estricto, luego me obligará a tipar*/

let nombre; //undefined
let nombre2: string; // ""
let numero: number = 0; // 0
let estado: boolean = false; //false


//typescript definir array de tipos

//opcion 1
const arrNum: number[] = [1,2,3,4,5,6];
const arrColors: string[] = new Array('rojo', 'verde', 'azul');

//opción 2
const arrNombres: Array<string>= ['Juan', 'Alberto','Nacho', 'Rocío'];

//funciones en typescript - tipado de funciones

//función declarativa

function sumar(pNumero1:number, pNumero2:number):number{
  return pNumero1 + pNumero2;
}

function sumar2(pNumero3:number, pNumero4:number):string {
  return String (pNumero3 + pNumero4);
}

// funciones expresivas, funcion expresión, arrow function, funciones anónimas.

const restar = function(pNumero1:number, pNumero2:number):number{
  return pNumero1 - pNumero2;
}
console.log(restar(4, 2))

const multiplicar = (pNumero1: number, pNumero2: number):number => pNumero1 * pNumero2;

//Hago un apetición a una API puede que no sepa el tipo de dato. Usaremos el tipo ANY

let valor:any = 'Hola';
valor = 2;
let alumno: any = {
  nombre: 'Juan',
  edad: 40
}

// como sé el tipo de dato de una variable

let cosita: string = '2';
typeof(cosita); //string
typeof cosita;//string

let numerito: number = Number(cosita);

