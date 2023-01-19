import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario: FormGroup;

  constructor(
    private userservice: UsersService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  async onSubmit() {
    const response = await this.userservice.login(this.formulario.value);
    console.log(response);
    if (response.success) {
      localStorage.setItem('token', response.token);
      this.router.navigate(['/productos']);
    } else {
      alert('Login incorrecto');
    }
  }
}
