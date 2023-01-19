import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  arrProductos: any[];

  constructor(private productService: ProductsService) {
    this.arrProductos = [];
  }

  async ngOnInit() {
    this.arrProductos = await this.productService.getAll();
    console.log(this.arrProductos)
  }
}
