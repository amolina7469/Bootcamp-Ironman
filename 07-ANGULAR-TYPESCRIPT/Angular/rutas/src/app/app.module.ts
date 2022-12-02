import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HeaderComponent } from './components/header/header.component';
import { C404Component } from './components/c404/c404.component';
import { PrestacionesComponent } from './components/prestaciones/prestaciones.component';
import { PrestacionViewComponent } from './components/prestacion-view/prestacion-view.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ProductoCardComponent } from './components/producto-card/producto-card.component';
import { ProductosViewComponent } from './components/productos-view/productos-view.component';
import { FiltroListaComponent } from './components/filtro-lista/filtro-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent,
    PrestacionesComponent,
    HeaderComponent,
    C404Component,
    PrestacionViewComponent,
    ListaProductosComponent,
    ProductoCardComponent,
    ProductosViewComponent,
    ProductosViewComponent,
    FiltroListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
