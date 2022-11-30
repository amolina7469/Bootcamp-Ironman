import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {

totalQuantity: number = 0;
numProducts: number= 0;

constructor(private productsService: ProductsService){}

ngDoCheck(){
  this.totalQuantity = this.productsService.getTotalPrice();
  this.numProducts = this.productsService.getNumberProducts();
}


}
