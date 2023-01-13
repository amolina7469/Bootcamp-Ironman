import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioClientesComponent } from './components/formulario-clientes/formulario-clientes.component';
import { FormularioProfesoresComponent } from './components/formulario-profesores/formulario-profesores.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { ListaProfesoresComponent } from './components/lista-profesores/lista-profesores.component';
import { RegistroUsuariosComponent } from './components/usuarios/registro/registro.usuarios.component';
import { LoginComponent } from './components/usuarios/login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: 'clientes', component: ListaClientesComponent, canActivate: [LoginGuard] },
  { path: 'clientes/new', component: FormularioClientesComponent, canActivate: [LoginGuard] },
  { path: 'profesores', component: ListaProfesoresComponent, canActivate: [LoginGuard] },
  { path: 'profesores/new', component: FormularioProfesoresComponent, canActivate: [LoginGuard] },
  { path: 'registro', component: RegistroUsuariosComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
