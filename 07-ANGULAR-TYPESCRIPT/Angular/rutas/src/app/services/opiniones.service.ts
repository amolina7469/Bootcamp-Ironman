import { Injectable } from '@angular/core';
import { OPINIONES } from '../db/opiniones.db';
import { Opinion } from '../interfaces/opinion.interface';

@Injectable({
  providedIn: 'root'
})
export class OpinionesService {

  private arrOpiniones: Opinion[]= OPINIONES;

  constructor() { }

  geByProductId(pProductId:number): Opinion[]{
    return this.arrOpiniones.filter(opinion => opinion.producto_id === pProductId)
  }
}
