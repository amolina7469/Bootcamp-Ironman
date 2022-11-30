import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prueba-ciclo-vida',
  templateUrl: './prueba-ciclo-vida.component.html',
  styleUrls: ['./prueba-ciclo-vida.component.css']
})
export class PruebaCicloVidaComponent {

  contadorInit: number = 0;
  @Input() valor: number = -1;

  constructor() {
    console.log(this.contadorInit, 'constructor') // 0
    console.log(this.valor, 'valor-constructor')  // -1
  }

  ngOnChanges():void { // se refresca el array de datos
    this.contadorInit++;
    console.log(this.contadorInit, 'ngonchanges') // 1
    console.log(this.valor, 'valor-ngonchanges') // 0
  }

  ngOnInit(): void{ // solo se ejecuta una vez
    this.contadorInit++;
    console.log(this.contadorInit, 'ngoninit') // 2
    console.log(this.valor, 'valor-ngoninit') // 0
  }
  ngDoCheck():void{
    this.contadorInit++;
    console.log(this.contadorInit, 'ngdocheck') 
    console.log(this.valor, 'valor-ngdocheck') 
  }

  cambiarValor($event: any) {
    this.valor = $event.target.value;
  }
}
