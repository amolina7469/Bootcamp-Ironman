import { Component } from '@angular/core';
import { ProfesoresService } from 'src/app/services/profesores.service'

@Component({
  selector: 'app-lista-profesores',
  templateUrl: './lista-profesores.component.html',
  styleUrls: ['./lista-profesores.component.css']
})
export class ListaProfesoresComponent {

  arrProfesores: any[];

  constructor(private profesoresService: ProfesoresService) {
    this.arrProfesores = [];
  }

  async ngOnInit() {
    const response = await this.profesoresService.getAll();
    this.arrProfesores = response;
    console.log(response);    
  }

  async borrar(profesorId: number) {
    await this.profesoresService.deleteById(profesorId);
    const response = await this.profesoresService.getAll();
    this.arrProfesores = response;
  }
}
