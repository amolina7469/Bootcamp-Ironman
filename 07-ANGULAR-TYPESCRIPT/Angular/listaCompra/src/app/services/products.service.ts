import { InstantiateExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { id, PRODUCTS } from '../db/products.db';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private arrProducts: Product[]= PRODUCTS;
  private id:number= id;

  constructor() { }

  getAll() :Product[]{
    return this.arrProducts;
  }

  filterByPrice(pPrice: any): Product[]{
    return this.arrProducts.filter(product => product.price >= pPrice.priceMin && product.price <= pPrice.priceMax);
    
  }

  searchByTitle(pSearch: string): Product[]{
    
    return this.arrProducts.filter(product => product.title.toLowerCase().includes(pSearch.toLowerCase()))
  }
  
  insert(pProduct: Product): any {
    let {title, price, quantity} = pProduct;
    if(title !== "" && price !== null && quantity !== null){
      pProduct.id = this.id;
    let position =this.arrProducts.push(pProduct);
    this.id++;
    return (position) ? {text :'Producto insertado correctamente', value: true }: {text:'Error al insertar el producto', value: false};
    } else {
      return {text: 'Los campos no pueden estar vacios. Los campos precio y cantidad tienen que ser numéricos', value: false}
    }
  }

  getNumberProducts():number{
      let num = 0;
      for(let product of this.arrProducts) {
        num +=  product.quantity
      }
      return num;
  }
  
  getTotalPrice():number{
    let price = 0;
      for(let product of this.arrProducts) {
        price += product.price * product.quantity
      }
      return price;
  }

}

