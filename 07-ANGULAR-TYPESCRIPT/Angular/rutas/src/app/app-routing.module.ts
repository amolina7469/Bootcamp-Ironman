import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C404Component } from './components/c404/c404.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { PrestacionViewComponent } from './components/prestacion-view/prestacion-view.component';
import { PrestacionesComponent } from './components/prestaciones/prestaciones.component';
import { OpinionesComponent } from './components/productos-view/opiniones/opiniones.component';
import { ProductosViewComponent } from './components/productos-view/productos-view.component';
import { TallasComponent } from './components/productos-view/tallas/tallas.component';

const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: "home"},
  {path: "home", component: HomeComponent},
  {path: "contacto", component: ContactoComponent},
  {path: "prestaciones", component: PrestacionesComponent},
  {path: "listaProductos", component: ListaProductosComponent},
  {path: "prestacion/:url", component: PrestacionViewComponent},
  {path: "producto/:id", component: ProductosViewComponent, children:
  [
    {path: "", pathMatch: 'full', redirectTo: "tallas"},
    {path: "opiniones", component: OpinionesComponent},
    {path: "tallas", component: TallasComponent}
  ]
},
  // {path: "**", redirectTo: 'home'} // si no existe la ruta me redirige a home
  {path: "**", component: C404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
