import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-acumulador',
  templateUrl: './acumulador.component.html',
  styleUrls: ['./acumulador.component.css']
})
export class AcumuladorComponent {

@Input() numeros: number[]=[];
suma: number = 0;
constructor(){
  console.log(this.numeros)
}

ngDoCheck(){
  this.suma = 0;
  console.log(this.numeros)
  for(let numero of this.numeros){
    this.suma = this.suma += numero;
  }
}
}
