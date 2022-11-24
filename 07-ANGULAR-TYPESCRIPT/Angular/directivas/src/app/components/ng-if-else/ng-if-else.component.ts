import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-else',
  templateUrl: './ng-if-else.component.html',
  styleUrls: ['./ng-if-else.component.css']
})
export class NgIfElseComponent {

  estado:boolean = false;

  cambiarEstado(): void{

 this.estado = !this.estado;

  }
}
