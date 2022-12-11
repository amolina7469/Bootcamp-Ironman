import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Todo } from '../interfaces/todo.iterface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  //el servicio necesita conectarse a una APIRest. Para ello tenemos que importar el httpClientModule dentro de app.module.ts i posteriormente inyectar dentro del servicio el httpcliente.
  private baseUrl: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getAll():Promise<Todo[]> {
    return lastValueFrom(this.httpClient.get<Todo[]>(this.baseUrl));
  }
}
