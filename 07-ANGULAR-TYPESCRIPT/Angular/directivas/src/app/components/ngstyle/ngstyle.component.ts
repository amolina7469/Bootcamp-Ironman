import { Component } from '@angular/core';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent {

color : string = 'blue';
fontSize: number = 25;
estiloParrafo: any = {};
propiedadCss: string = 'border-radius'
valorCSS : string= '20px';

constructor(){
  this.estiloParrafo = {
    'backgrond-color': 'black',
    'padding': '10px',
    'color' : 'green'
  }

  this.estiloParrafo.border = '2px solid tomato';
  this.estiloParrafo['border-radius'] = '20px';
  this.estiloParrafo[this.propiedadCss] = this.valorCSS;
}

cambiarFuente($event:any) {
this.fontSize = $event.target.value;
}

cambiarColor($event: any){
this.color = $event.target.value;
}
addStyles(){
  this.estiloParrafo[this.propiedadCss] = this.valorCSS;
}

}
