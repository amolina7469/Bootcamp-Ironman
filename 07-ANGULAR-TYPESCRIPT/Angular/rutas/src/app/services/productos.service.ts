import { Injectable } from '@angular/core';
import { PRODUCTOS } from '../db/productos.db';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ListaProductosService {

 private  arrProductos: Producto[] = PRODUCTOS;

  constructor() { }

getAll(): Producto[]{
  return this.arrProductos;
}

 getById(pId: number): Producto | undefined {
  return this.arrProductos.find(producto => producto.id == pId)
 } 
}
