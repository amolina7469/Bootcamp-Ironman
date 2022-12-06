import { Injectable } from '@angular/core';
import { SERIES } from '../db/series.db';
import { Serie } from '../interfaces/serie.interface';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private arrSeries: Serie[] = SERIES;

  constructor() { }

  getAll(): Serie[] {
    return this.arrSeries;
  }

  getById(pId: number): Serie | undefined {
    return this.arrSeries.find(serie => serie.id === pId)
  }
 
  getAllChannels():string[] {
    return this.arrSeries.map(serie => serie.canal)
  }
}
