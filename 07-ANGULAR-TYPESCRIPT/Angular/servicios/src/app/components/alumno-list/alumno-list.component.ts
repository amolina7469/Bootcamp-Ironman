import { Component } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno.interface';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-alumno-list',
  templateUrl: './alumno-list.component.html',
  styleUrls: ['./alumno-list.component.css']
})
export class AlumnoListComponent {

  alumnos: Alumno[] =[];
  //quiero usar el servicio dentro de mi componente, como el servicio es un inyectable solo se puede usar inyectando la dependencia. Para inyectar la independencia tenemos que pasar el servicio como paramtreo privado del constructor

  constructor(private alumnosService:AlumnosService){

  }

ngOnInit() : void{
  this.alumnos = this.alumnosService.getAll()
}

}
