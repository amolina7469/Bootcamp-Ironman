import { Component } from '@angular/core';
import { Todo } from './interfaces/todo.interface';
import { TodosService } from './services/todos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  name: string = 'Amancio';
  iva: number = 0.21;
  precio: number = 25;
  racional:number = 0.324567;
  price:number = 123456;
  texto: string = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, sit corporis atque id fugiat, explicabo architecto esse quasi ex laboriosam error, eum rem? Perspiciatis sit rem voluptates, ab aut quia a itaque voluptate dicta, consequatur quas totam libero corrupti fugiat repudiandae ratione ducimus nobis quasi harum eligendi vel unde excepturi quam. Quis sed iusto placeat veniam quia esse aperiam! Ullam eaque possimus voluptates, sunt assumenda adipisci nam ut fuga dicta officiis molestiae asperiores non officia tempore nobis velit dolore! Repudiandae quasi architecto odio ipsam quo, reprehenderit porro minus consectetur ad adipisci, eaque fuga facere provident quaerat sapiente voluptatum qui necessitatibus! Et maxime natus accusamus praesentium aliquid soluta exercitationem eligendi dolore laudantium tempore, atque nemo voluptatum voluptates commodi quis modi sequi. Ut dolorem culpa optio alias, totam iste, at itaque deleniti molestias, quo officiis quia nostrum! Sunt cum reiciendis corporis! Architecto dignissimos quaerat quibusdam natus accusantium? Molestias adipisci numquam libero suscipit esse nihil, repellendus eaque aspernatur, facilis eveniet, sit nesciunt molestiae consectetur alias. Nulla, ea dolor mollitia harum debitis ipsa tempora voluptatibus accusamus cupiditate molestiae sequi voluptatum inventore quibusdam, expedita, esse fugit eaque perferendis voluptatem totam hic ducimus et distinctio ipsam! Praesentium aperiam hic modi perspiciatis unde cum aspernatur nisi! Totam.';
  sueldoBrutoMensual = 2000;

  arrayNumeros: number[]=[1, 2, 3, 4, 5, 6, 7]
  arrayNumeros2: any[]=[
    {numero:1, tipo: 'impar'},
    {numero:2, tipo: 'par'},
    {numero:3, tipo: 'impar'},
    {numero:4, tipo: 'par'},
    {numero:5, tipo: 'impar'},
  ];

  fecha: Date = new Date();
  birthday:string ='1982-03-05';

  arrTodoPromise!: Promise<Todo[]>;
  arrTodoObservable!: Observable<Todo[]>;

  constructor(private todosService: TodosService){}

  ngOnInit():void{
    this.arrTodoPromise = this.todosService.getAllPromises();
    this.arrTodoObservable = this.todosService.getAllObservables();  }
;}
