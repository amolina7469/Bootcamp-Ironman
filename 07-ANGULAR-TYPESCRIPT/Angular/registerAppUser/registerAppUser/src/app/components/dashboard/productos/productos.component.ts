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
currentPage: number = 0;
totalPage: number= 0;
mensaje:string = "";
vistaAlerta: boolean = false;
tipoError: string ="";

constructor(private productsService: ProductsService){}

async ngOnInit(): Promise<void>  {
  // this.arrProducts = await this.productsService.getAll().then(data => data.results);
  // console.log(this.arrProducts)

  let response = await this.productsService.getAll();
  this.currentPage = response.page;
  this.totalPage = response.total_pages;
  this.arrProducts = response.results;
}

async gotoPage($event: any): Promise<void> {
  // if($event.target.innerText === 'next'){
  //   this.currentPage += 1;
  // }else{
  //   this.currentPage -= 1;
  // }
  this.currentPage = ($event.target.innerText === 'next') ? this.currentPage + 1 : this.currentPage -1;

  let response = await this.productsService.getAll(this.currentPage);
  this.arrProducts= response.results;
  console.log(response)
}

async deleteProduct(pId: string | undefined):Promise<void>{
  this.vistaAlerta = false;
  if(pId !== undefined){
    let response = await this.productsService.delete(pId);
    if(response.id){
      this.mensaje='Producto borrado correctamente';
      this.tipoError= 'success';
      this.vistaAlerta= true;
    } else {
      this.mensaje=response.error;
      this.tipoError= 'danger';
      this.vistaAlerta= true;
    }
  }
}

}
