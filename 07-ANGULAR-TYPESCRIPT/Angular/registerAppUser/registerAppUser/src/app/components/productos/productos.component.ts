import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

arrProducts: Products[]=[];

constructor(private productsService: ProductsService){}

ngOnInit()  {


    this.productsService.getAll().then(data => {this.arrProducts = data; console.log(this.arrProducts)});
    //this.arrProducts = await this.productsService.getAll();
    console.log(this.arrProducts)
 
}

}
