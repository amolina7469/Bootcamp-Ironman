import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryViewComponent } from './components/country-view/country-view.component';
import { EuropeComponent } from './components/europe/europe.component';

const routes: Routes = [
  {path:"", pathMatch: 'full', redirectTo: 'countries'},
  {path: 'countries', component: EuropeComponent},
  {path:'country/:code', component: CountryViewComponent},
  {path:"**", redirectTo: 'countries'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
