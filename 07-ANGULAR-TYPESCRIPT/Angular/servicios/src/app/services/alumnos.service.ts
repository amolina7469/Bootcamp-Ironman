import { Injectable } from '@angular/core';
import { ALUMNOS } from '../db/alumnos.db';
import { Alumno } from '../interfaces/alumno.interface';


@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private arrAlumnos: Alumno[]=[];
  constructor() {
    this.arrAlumnos = ALUMNOS;
   }

   getAll(){
    return this.arrAlumnos
   }
}
