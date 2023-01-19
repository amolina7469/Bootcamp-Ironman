import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductosComponent } from './components/form-productos/form-productos.component';
import { LoginComponent } from './components/login/login.component';
import { ListaProductosComponent } from './components/productos/lista-productos/lista-productos.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'productos', component: ListaProductosComponent },
  { path: 'productos/new', component: FormProductosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
