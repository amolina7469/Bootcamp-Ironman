import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})

export class CronometroComponent implements OnInit {

contador : number = 0;
intervalo: any;
estado: boolean = false;
txtBtn: string = 'Iniciar';
@Input() inicio: number = 4;
@Input() fin: number = 12;
@Output() finalizado: EventEmitter<string>

@Input() color: string ='tomato';

constructor(){
  this.finalizado = new EventEmitter();
}
ngOnInit(){ // es una función que se ejecuta siempre cuando todo el componente está cargado

  // los inputs solo están disponibles cuando el componente esta completamente cargado es decir en el ngOnInit
 this.contador=this.inicio;
}

startStop():void {
  if(!this.estado ){
      this.start();
  }else{
      this.stop();
  }
  this.estado = !this.estado
  
}
start(): void{
 this.intervalo = setInterval(() => {
      this.contador++;
      if(this.contador === this.fin){
        this.stop(); // emito al padre comuniacndole que he terminado mi tarea
        this.finalizado.emit(this.color);
      }
  }, 1000)
  this.txtBtn='Parar';
}

stop(){
  clearInterval(this.intervalo);
  this.txtBtn='Iniciar';
}
}
