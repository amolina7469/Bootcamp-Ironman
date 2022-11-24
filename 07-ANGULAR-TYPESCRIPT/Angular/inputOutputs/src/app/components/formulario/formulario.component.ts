import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contacto } from 'src/app/interfaces/contacto.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

@Output() contactoEmitido: EventEmitter<Contacto>
  nuevoContacto: Contacto = {nombre: "", telefono: 0, email:""};
@Input() listaContactos: Contacto[] = [];
  constructor(){
    this.contactoEmitido= new EventEmitter();
  }

  recogerDatosForm(){
    
    if(this.nuevoContacto.email !== "" && this.nuevoContacto.nombre !== "" && this.nuevoContacto.telefono !== 0){
      this.contactoEmitido.emit(this.nuevoContacto);
    }
    console.log(this.nuevoContacto)
    
    this.nuevoContacto = {nombre: "", telefono: 0, email:""};
  }

}
