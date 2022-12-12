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
public page!: number;
constructor(private productsService: ProductsService){}

async ngOnInit(): Promise<any>  {
  this.arrProducts = await this.productsService.getAll().then(data => data.results);
  console.log(this.arrProducts)
}

}
