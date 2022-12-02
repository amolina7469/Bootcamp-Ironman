import { Component, OnInit } from '@angular/core';
import { Prestacion } from 'src/app/interfaces/prestacion.interface';
import { PrestacionesService } from 'src/app/services/prestaciones.service';

@Component({
  selector: 'app-prestaciones',
  templateUrl: './prestaciones.component.html',
  styleUrls: ['./prestaciones.component.css']
})
export class PrestacionesComponent  implements OnInit {

  prestaciones: Prestacion[] = []
constructor (private PrestacionesService: PrestacionesService){}

ngOnInit() : void {
  this.prestaciones = this.PrestacionesService.getAll();
}
}
