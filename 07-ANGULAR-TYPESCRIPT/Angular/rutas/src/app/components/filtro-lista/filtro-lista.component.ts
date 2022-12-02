
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtro-lista',
  templateUrl: './filtro-lista.component.html',
  styleUrls: ['./filtro-lista.component.css']
})
export class FiltroListaComponent {

@Output() stockEmit: EventEmitter<string |boolean> 

constructor() {
  this.stockEmit = new EventEmitter();
}

getStock($event : any): void {

  const stock : any = {
    'all': 'all',
    'true': true,
    'false': false
  }
  this.stockEmit.emit(stock[$event.target.value])
}
}
