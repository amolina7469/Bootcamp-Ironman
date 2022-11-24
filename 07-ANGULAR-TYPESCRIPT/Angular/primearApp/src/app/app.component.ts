import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Biding: Comunicación entre ts y html
  //culaquier propiedad de clase creada dentro del componente permite pintar dicho dato dentro del html

  nombre: string = "Juan Antonio";
}
