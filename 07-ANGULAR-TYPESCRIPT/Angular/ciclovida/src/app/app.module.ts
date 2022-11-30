import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PruebaCicloVidaComponent } from './components/prueba-ciclo-vida/prueba-ciclo-vida.component';
import { AcumuladorComponent } from './components/acumulador/acumulador.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaCicloVidaComponent,
    AcumuladorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
