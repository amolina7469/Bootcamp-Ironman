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

  
}