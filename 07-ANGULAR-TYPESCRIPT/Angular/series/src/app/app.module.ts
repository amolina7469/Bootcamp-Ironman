import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { CardComponent } from './components/card/card.component';
import { CharacterViewComponent } from './components/character-view/character-view.component';
import { SerieViewComponent } from './components/serie-view/serie-view.component';
import { FiltersComponent } from './components/filters/filters.component';
import { CastingComponent } from './components/serie-view/casting/casting.component';
import { SeasonsComponent } from './components/serie-view/seasons/seasons.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemListComponent,
    CardComponent,
    CharacterViewComponent,
    SerieViewComponent,
    FiltersComponent,
    CastingComponent,
    SeasonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
