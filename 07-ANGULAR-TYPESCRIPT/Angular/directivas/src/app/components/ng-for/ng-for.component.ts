import { Component } from '@angular/core';
import { Episodio } from 'src/app/interfaces/episodio.interface';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {

todosEpisodios: Episodio[] = [];
arrFiltro: Episodio[] = [];

constructor(){
    this.todosEpisodios = new Array(
      { title: 'Winter Is Coming', director: 'Tim Van Patten' },
      { title: 'The Kingsroad', director: 'Tim Van Patten' },
      { title: 'Lord Snow', director: 'Brian Kirk' },
      { title: 'Cripples, Bastards, and Broken Things', director: 'Brian Kirk' },
      { title: 'The Wolf and the Lion', director: 'Brian Kirk' },
      { title: 'A Golden Crown', director: 'Daniel Minahan' },
      { title: 'You Win or You Die', director: 'Daniel Minahan' },
      { title: 'The Pointy End', director: 'Daniel Minahan' },
    )

      this.arrFiltro = this.todosEpisodios;
  }  

  filtrarLista($event: any){
   
    // if($event.target.value !== ""){
      
    //   this.arrFiltro = this.todosEpisodios.filter(episodio => episodio.director === $event.target.value);
    // } else {
    //    this.arrFiltro = this.todosEpisodios;

    // }
   
    this.arrFiltro= this.todosEpisodios.filter(episodio => episodio.director. includes($event.target.value))
    
  }
}
