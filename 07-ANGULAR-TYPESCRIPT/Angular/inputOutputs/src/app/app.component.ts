import { Component } from '@angular/core';
import { Contacto } from './interfaces/contacto.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'inputOutputs';
  // valorInicial: number = 100;
  // valorFinal: number =110;
  // color: string ="";

  // cargarColor($event:string){
  //  this.color = $event;
    
  // }

  arrContactos: Contacto[]=[]

  constructor() {
    this.arrContactos = [
      {nombre: 'Juan', telefono: 78897987, email: 'juan@email.com'},
      {nombre: 'Pepe', telefono: 55545657, email: 'pepe@email.com'},
      {nombre: 'Toni', telefono: 76767766, email: 'toni@email.com'},
      {nombre: 'Paco', telefono: 99786767, email: 'paco@email.com'}
    ]
  }

  guardarContacto($event: Contacto) :boolean {

    let posicion = this.arrContactos.findIndex(contacto => contacto.email === $event.email || contacto.telefono === $event.telefono)
    if(posicion !== -1){
      alert('Usuario ya existe')
      return false;
    } 
    
    this.arrContactos.push($event)
    return true;
  }
}
