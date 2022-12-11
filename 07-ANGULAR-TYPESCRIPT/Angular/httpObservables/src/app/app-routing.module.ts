import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterViewComponent } from './components/character-view/character-view.component';


const routes: Routes = [
  {path:"", pathMatch: 'full', redirectTo: 'characters'},
  {path:"characters", component: CharacterListComponent},
  {path:"**", redirectTo: 'character'},
  {path:"characters/:idCharacter", component: CharacterViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
