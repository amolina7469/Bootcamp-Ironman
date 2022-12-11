import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: 'todos'},
  {path:"todos", component: TodoListComponent},
  {path: "**", redirectTo: "todos"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
