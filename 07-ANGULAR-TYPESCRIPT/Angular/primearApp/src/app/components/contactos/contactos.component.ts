import { Component } from '@angular/core';
import { Contacto } from 'src/app/interfaces/contacto.interface';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent {
// los interfaces siempre son en singular porque representan la información de un elemento.(contacto)
// para generar una interface el comando de terminal es 
//ng generate interface interfaces/contacto --type=interface
//ng g i interfaces/contacto --type=interface
  arrContactos: Contacto[]=[];
  todosContactos: Contacto[]=[];
  primerContacto: Contacto;
  segundoContacto: Contacto | any;
  tercerContacto!: Contacto;
  name : string = "";

  constructor(){
    this.todosContactos= [
      { id: 1, name: 'Amancio',phone: 608809590, type:'personal'},
      {id: 2, name: 'Teresa',phone: 608809590, type:'laboral'},
      {id: 3, name: 'Alberto',phone: 608809590, type:'laboral'},
      {id: 4, name: 'Ron',phone: 608809590, type:'personal'},
      {id: 5, name: 'Nacho',phone: 608809590, type:'personal'}
    ]
    this.arrContactos = this.todosContactos;
    this.primerContacto = this.arrContactos[0];
    this.tercerContacto = this.arrContactos[2];
  }

  cargarContactos() : string {
    let resultado = "";
    
    
    this.arrContactos.forEach(contacto => {
      resultado += `<li>${contacto.name} - ${contacto.phone}</li>`
    })
    return resultado;
  }

  filtrarContactos($event : any) {
      let tipo = $event.target.value;
      this.arrContactos = this.todosContactos.filter(contacto => contacto.type.includes(tipo))
  }
  
  buscarContacto(){
    this.arrContactos= this.todosContactos.filter(contacto => contacto.name.toLowerCase().includes(this.name.toLowerCase()))
  }
}
