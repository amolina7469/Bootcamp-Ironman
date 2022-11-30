import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products:  Product[]=[];

  constructor (private productsService: ProductsService){}

  ngOnInit(){
  this.products = this.productsService.getAll();  
}

filterByPrice($event: any){
  if($event.priceMin !== null && $event.priceMax !== null && $event.priceMin !== "" && $event.priceMax !== ""){
    this.products = this.productsService.filterByPrice($event)
  } else {
    this.products = this.productsService.getAll();  
  }
}

searchProduct($event: any){
  this.products = this.productsService.searchByTitle($event)
 
  
}
}
