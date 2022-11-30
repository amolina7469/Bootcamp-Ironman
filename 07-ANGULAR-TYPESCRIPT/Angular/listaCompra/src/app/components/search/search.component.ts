import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

 @Output()  searchEmit : EventEmitter<string>
  constructor(){
    this.searchEmit = new EventEmitter();
  }


 getSearch($event: any): void{
  this.searchEmit.emit($event.target.value)
  
 }

}
