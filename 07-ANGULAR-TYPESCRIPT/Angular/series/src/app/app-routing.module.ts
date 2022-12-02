import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { CastingComponent } from './components/serie-view/casting/casting.component';
import { SeasonComponent } from './components/serie-view/season/season.component';
import { SerieViewComponent } from './components/serie-view/serie-view.component';

const routes: Routes = [
  {path:"", pathMatch: "full", redirectTo:"series"},
  {path:"**", redirectTo:"series"},
  {path:"series", component: ItemListComponent},
  {path:"serie/:idserie", component: SerieViewComponent, children:
  [
    {path: "reparto", component: CastingComponent},
    {path: "temporadas", component: SeasonComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
