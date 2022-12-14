import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SentencesListComponent } from './components/sentences-list/sentences-list.component';

const routes: Routes = [
  // {path:"", pathMatch: "full", redirectTo: "categories"},
  // {path:"categories",component: HeaderComponent},
  // {path: "categories/:category", component: SentencesListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
