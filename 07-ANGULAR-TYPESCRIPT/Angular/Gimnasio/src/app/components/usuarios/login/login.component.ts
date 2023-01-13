import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario: FormGroup;
  errorMessage: string;
  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) {
    this.errorMessage = "";
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  async onSubmit() {
    this.errorMessage = "";
    const response = await this.usuariosService.login(this.formulario.value);
    console.log(response);
    if (response.fatal) {
      this.errorMessage = response.fatal;
    } else {
      await Swal.fire({
        title: 'Login correcto',
        text: response.success,
        icon: 'success'
      });
      localStorage.setItem('token', response.token);
      this.router.navigate(['/clientes']);
    }
  }
}
