import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { TotalComponent } from './components/total/total.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FilterPriceComponent } from './components/filter-price/filter-price.component';
import { SearchComponent } from './components/search/search.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TotalComponent,
    ProductListComponent,
    FilterPriceComponent,
    SearchComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
