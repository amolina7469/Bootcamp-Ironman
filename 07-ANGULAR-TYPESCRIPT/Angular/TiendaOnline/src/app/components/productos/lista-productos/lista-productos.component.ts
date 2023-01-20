import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  arrProductos: any[];
  currentPage: number;
  pages: number;
  constructor(private productService: ProductsService) {
    this.arrProductos = [];
    this.currentPage = 0;
    this.pages = 0;
  }

  async ngOnInit() {
    const response = await this.productService.getAll();
    this.arrProductos = response.results;
    this.currentPage = response.info.current_page;
    this.pages = response.info.pages;
  }

  async cambioPagina(siguiente: boolean) {
    if (siguiente) this.currentPage++;
    else this.currentPage--;
    //Recuperar los productos de la nueva página
    const response = await this.productService.getByPage(this.currentPage);
    this.arrProductos = response.results;
  }

  arrFromNumber(num: number): any[] { //iterar un ngfor sin tener un array creo elñ arrya
    return Array(num).fill(0).map((n, i) => {
      return i + 1;
    })
  }

  async seleccionPagina(page: number) {
    const response = await this.productService.getByPage(page);
    this.arrProductos = response.results;
    this.currentPage = page;
  }
}
