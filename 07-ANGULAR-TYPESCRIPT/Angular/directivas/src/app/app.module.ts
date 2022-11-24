import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
import { NgclassComponent } from './components/ngclass/ngclass.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgIfElseComponent } from './components/ng-if-else/ng-if-else.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    NgstyleComponent,
    NgclassComponent,
    NgIfComponent,
    NgIfElseComponent,
    NgForComponent,
    NgSwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
