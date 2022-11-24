import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})

export class EventosComponent {

  //Event Biding o como comunicar HTML con ts
  //Event biding al contrario que el property biding va entre paréntesis () no entre corchetes []

  color: string = "";
  texto: string = "";
  mensaje: string = "";
  textBtn: string= "Mostrar";
  ciudad: string ="";
  mensajeCiudad: string ="";

  cambiarColor($event: any) {
    this.color = $event.target.value;
  }

  capturarTexto($event: any){
    this.texto = $event.target.value;
}

//Primer ejercicio
// mponer un h1 que tenga un mensaje dinamico, inicialmente vacio y un botón que cuando hagamos click deberá mostrar el mensaje. En el botón si no aparece el mensaje deberá poner el texto "mostrar". Cuando aparezca el mensaje el botón tiene que poner "ocultar". Viceversa

  mostrarTexto(){
    if(this.mensaje === ""){
      this.mensaje = "Hola caracola";
      this.textBtn = "Ocultar";
    } else {
      this.mensaje = "";
      this.textBtn = "Mostrar";
    }
      
  }
//Segundo ejercicio
// selector de ciudad que permita escoger entre 5 y me saque un mensaje de vivo en la ciudad seleccionada y si marco la opción por defecto deberá aparecer no vivo en ninguna ciudad

  eligeCiudad($event: any){
    this.ciudad =$event.target.value;
    console.log(this.ciudad)

    switch(this.ciudad) {
       case "Ciudad":{
          this.mensajeCiudad = "No vivo en ninguna ciudad"
          break;
       }
       case "Roma":{
        this.mensajeCiudad = "Vivo en la ciudad Roma";
        break;
      }
        case "París":{
        this.mensajeCiudad = "Vivo en la ciudad París";
        break;
      }
       case "Berlín":{
        this.mensajeCiudad = "Vivo en la ciudad Berlín";
        break;
      }
       case "Londres":{
        this.mensajeCiudad = "Vivo en la ciudad Londres";
        break;
      }
       case "Amsterdam": {
        this.mensajeCiudad = "Vivo en la ciudad Amsterdam";
        break;
      }
    }

  }
}
