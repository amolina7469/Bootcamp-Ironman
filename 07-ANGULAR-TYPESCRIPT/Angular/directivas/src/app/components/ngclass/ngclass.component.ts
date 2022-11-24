import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent {

  estilos: string = 'textoVerde fondoRojo'
  azulito: string = 'fondoAzul'
  activo: boolean = true;

  cambiarEstado(){
    this.activo = !this.activo;
  }
}
