import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo.iterface';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
// El componente todolist tendrá que llamar al servicio y llenar un array de todos. El servicio le devuelve una promesa así que tendrá que consumir esta promesa.

arrTodos: Todo[]=[];

constructor(
  private todoService: TodosService
){}

async ngOnInit(): Promise<void> {
// response me devuleve un resultado esperado y reject un error. El problema es que await solo gestiona response. Para controlar el error usamos un try/catch.
try{
  this.arrTodos = await this.todoService.getAll();
    console.log(this.arrTodos)
  } catch(err) {
    console.log(err);
  }
}
}
