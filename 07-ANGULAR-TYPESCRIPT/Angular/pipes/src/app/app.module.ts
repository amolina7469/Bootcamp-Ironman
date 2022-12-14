import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeEs from '@angular/common/locales/es'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { VueltecitaPipe } from './pipes/vueltecita.pipe';
import { RecortarStringsPipe } from './pipes/recortar-strings.pipe';
import { NetoPipe } from './pipes/neto.pipe';
import { FormateadorPipe } from './pipes/formateador.pipe'

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    VueltecitaPipe,
    RecortarStringsPipe,
    NetoPipe,
    FormateadorPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
