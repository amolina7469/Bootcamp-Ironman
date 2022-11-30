
import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filter-price',
  templateUrl: './filter-price.component.html',
  styleUrls: ['./filter-price.component.css']
})
export class FilterPriceComponent {

@Output() pricesEmit : EventEmitter<any>
// @Output() resetEmit : EventEmitter<boolean>
constructor(){
  this.pricesEmit = new EventEmitter();
}

  getPrice(pForm: any){
    console.log(pForm.value);
    
  let {priceMin,  priceMax} = pForm.value; //destructuring
    if(priceMin <= priceMax){
         //filtro
         this.pricesEmit.emit(pForm.value);
    }else {
      alert('El precio mínimo no puede ser mayor que el máximo');
    }
    pForm.resetForm();
  }

 getAllProducts(){
    let resetForm = {priceMin: "", PriceMax: ""};
    this.pricesEmit.emit(resetForm);
 }
}
