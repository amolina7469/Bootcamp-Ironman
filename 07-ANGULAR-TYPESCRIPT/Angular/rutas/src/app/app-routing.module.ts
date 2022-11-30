import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C404Component } from './components/c404/c404.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: "home"},
  {path: "home", component: HomeComponent},
  {path: "contacto", component: ContactoComponent},
  {path: "servicios", component: ServiciosComponent},
  // {path: "**", redirectTo: 'home'} // si no existe la ruta me redirige a home
  {path: "**", component: C404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
