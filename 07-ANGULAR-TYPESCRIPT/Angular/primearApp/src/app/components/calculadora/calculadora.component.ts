import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  resultado: number = 0;
  numero1: number = 0;
  numero2: number = 0;

  sumar(){
    this.resultado = this.numero1 + this.numero2;
    this.reset()
    
  }
  restar(){
    this.resultado = this.numero1 - this.numero2;
    this.reset()
    
  }
  multiplicar(){
    this.resultado = this.numero1 * this.numero2;
    this.reset()
    
  }
  reset(){
    this.numero1 = 0;
    this.numero2 =0;
  }
}
