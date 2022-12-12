import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/interfaces/products.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit{

  product : Products | any;
  constructor(
    private activatedRouted: ActivatedRoute,
    private productsService: ProductsService
    ){
  }

ngOnInit() {
    this.activatedRouted.params.subscribe(async (params:any) => {
      let id: string = params.idproduct;
      console.log(id)
      this.product = await this.productsService.getById(id); 
      console.log(this.product)
      })
  }
}
