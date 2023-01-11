import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-formulario-clientes',
  templateUrl: './formulario-clientes.component.html',
  styleUrls: ['./formulario-clientes.component.css']
})
export class FormularioClientesComponent {

  formulario: FormGroup;

  constructor(
    private clientesService: ClientesService
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      direccion: new FormControl(),
      email: new FormControl(),
      edad: new FormControl(),
      genero: new FormControl(),
      cuota: new FormControl(),
      fecha_nacimiento: new FormControl(),
      dni: new FormControl()
    });
  }

  async onSubmit() {
    const response = await this.clientesService.create(this.formulario.value);
    console.log(response);
  }

}
