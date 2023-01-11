import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfesoresService } from 'src/app/services/profesores.service';

@Component({
  selector: 'app-formulario-profesores',
  templateUrl: './formulario-profesores.component.html',
  styleUrls: ['./formulario-profesores.component.css']
})
export class FormularioProfesoresComponent {

  formulario: FormGroup;

  constructor(
    private profesoresService: ProfesoresService
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      experiencia: new FormControl()
    });
  }

  onSubmit(){
    const response = this.profesoresService.create(this.formulario.value);
    console.log(response);
  }
}
