import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { AlumnoListComponent } from './components/alumno-list/alumno-list.component';
import { AlumnoCardComponent } from './components/alumno-card/alumno-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AlumnoListComponent,
    AlumnoCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
