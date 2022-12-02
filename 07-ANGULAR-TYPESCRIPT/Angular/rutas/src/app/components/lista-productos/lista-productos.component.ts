import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ListaProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit{

  productos: Producto[]=[];
  
 
  constructor(private productosService: ListaProductosService){}

ngOnInit(){
  this.productos  = this.productosService.getAll();
  }

 filterByStock($event: string | boolean): void{
  // if($event.stock === 'true'){
  //   this.productos = this.productosService.filterByStock($event);
  // }if else($event.stock === 'false'){
  //    this.productos = this.productosService.filterByStock($event);
  // }else{
  //   this.productos= this.productosService.getAll();
  // }
  if($event !== 'all'){
    this.productos = this.productosService.getByStock($event);
  } else {
    this.productos = this.productosService.getAll();
  }

 }
}