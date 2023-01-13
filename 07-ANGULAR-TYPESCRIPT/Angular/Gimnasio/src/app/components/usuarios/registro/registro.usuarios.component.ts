import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-registro.usuarios',
  templateUrl: './registro.usuarios.component.html',
  styleUrls: ['./registro.usuarios.component.css']
})
export class RegistroUsuariosComponent {

  registro: FormGroup;

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) {
    this.registro = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    });
  }

  async onSubmit() {
    const response = await this.usuariosService.register(this.registro.value);
    if (response.insertId) {
      // Registro correcto
      alert('Registro Correcto');
      this.router.navigate(['/login']);
    } else {
      // Registro incorrecto
      alert('Registro Incorrecto');
    }
  }
}
