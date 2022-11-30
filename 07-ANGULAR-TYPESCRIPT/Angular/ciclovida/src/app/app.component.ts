import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ciclovida';
  resultado : number = 0;

  arrNumeros: number[] = [1,2,3,4,5,6,7,8,9]; //45

  sumar() {
    this.resultado++;
  }

  crearNumero($event:any){
    let numero = parseInt($event.target.value)
    this.arrNumeros.push(numero);
    $event.target.value = "";
  }
}
