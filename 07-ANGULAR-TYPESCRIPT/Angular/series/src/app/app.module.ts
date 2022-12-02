import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { CharacterViewComponent } from './components/character-view/character-view.component';
import { SerieViewComponent } from './components/serie-view/serie-view.component';
import { FiltersComponent } from './components/filters/filters.component';
import { CastingComponent } from './components/serie-view/casting/casting.component';
import { SeasonComponent } from './components/serie-view/season/season.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemListComponent,
    CharacterViewComponent,
    SerieViewComponent,
    FiltersComponent,
    CastingComponent,
    SeasonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
