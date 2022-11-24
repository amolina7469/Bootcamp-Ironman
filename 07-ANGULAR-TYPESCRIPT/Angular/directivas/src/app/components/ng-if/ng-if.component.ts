import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {

  seccionActual = 'london';
  estado: string = 'visto';


  cargarSeccion(pSeccion: string):void{

this.seccionActual = pSeccion;
  }
}
