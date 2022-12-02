import { Injectable } from '@angular/core';
import { PRESTACIONES } from '../db/prestaciones.db';
import { Prestacion } from '../interfaces/prestacion.interface';

@Injectable({
  providedIn: 'root'
})
export class PrestacionesService {

private arrPrestaciones: Prestacion[] = PRESTACIONES;

  constructor() { }

  getAll(): Prestacion[]{
    return this.arrPrestaciones;
  }

  getByUrl(pUrl: string): Prestacion | undefined {
    return this.arrPrestaciones.find(prestacion => prestacion.url === pUrl)
  }
}
