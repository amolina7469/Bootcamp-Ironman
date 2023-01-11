import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioClientesComponent } from './components/formulario-clientes/formulario-clientes.component';
import { FormularioProfesoresComponent } from './components/formulario-profesores/formulario-profesores.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { ListaProfesoresComponent } from './components/lista-profesores/lista-profesores.component';

const routes: Routes = [
  {path: 'clientes', component: ListaClientesComponent},
  {path: 'clientes/new', component: FormularioClientesComponent},
  {path: 'profesores', component: ListaProfesoresComponent},
  {path: 'profesores/new', component: FormularioProfesoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
