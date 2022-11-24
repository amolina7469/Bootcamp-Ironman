import { Component, Input, OnInit } from '@angular/core';
import { Contacto } from 'src/app/interfaces/contacto.interface';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
  })
export class ContactosComponent implements OnInit {
  @Input() listaContactos: Contacto[] = [];
  searchName: string ="";
  filtroArr : Contacto[] = [];
  ngOnInit():void {
  console.log(this.listaContactos)
  
  }

cargarContactos() {
  let resultado= "";

  if(this.searchName === ""){
      this.listaContactos.forEach(contacto => {
      resultado += `<li>${contacto.nombre} - ${contacto.telefono} - ${contacto.email}</li>`})
  } else {
      this.filtroArr = this.listaContactos.filter(contacto => contacto.nombre.toLowerCase().includes(this.searchName.toLowerCase()))
      this.filtroArr.forEach(contacto => {
      resultado += `<li>${contacto.nombre} - ${contacto.telefono} - ${contacto.email}</li>`})
  }
  return resultado;
}


}
