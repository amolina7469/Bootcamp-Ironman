import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http'
import { Todo } from '../interfaces/todo.interface';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private baseUrl: string ='https://jsonplaceholder.typicode.com/todos';

  constructor(private httpClient : HttpClient) { }

  getAllPromises():Promise<Todo[]>{
    return lastValueFrom(this.httpClient.get<Todo[]>(this.baseUrl));
  }
  
  
  getAllObservables():Observable<Todo[]>{
    
    return this.httpClient.get<Todo[]>(this.baseUrl);
  }
}
