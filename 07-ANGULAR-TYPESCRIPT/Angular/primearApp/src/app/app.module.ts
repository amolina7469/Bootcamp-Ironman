//librerias
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//componentes
import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ContactosComponent } from './components/contactos/contactos.component';


//Decorador: funcion propia de typescript que decora un método, una clase o una propiedad. Añade cierta información necesaria para la función, método o clase que le sucede
@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    EventosComponent,
    CalculadoraComponent,
    ContactosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
