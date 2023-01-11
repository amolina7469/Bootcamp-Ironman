import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { FormularioClientesComponent } from './components/formulario-clientes/formulario-clientes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaProfesoresComponent } from './components/lista-profesores/lista-profesores.component';
import { FormularioProfesoresComponent } from './components/formulario-profesores/formulario-profesores.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaClientesComponent,
    FormularioClientesComponent,
    ListaProfesoresComponent,
    FormularioProfesoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
