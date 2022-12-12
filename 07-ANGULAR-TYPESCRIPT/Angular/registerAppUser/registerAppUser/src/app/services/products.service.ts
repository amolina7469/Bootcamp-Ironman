import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Products } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl: string = 'https://peticiones.online/api/products'

  constructor(private httpClient: HttpClient) { }

getAll(): Promise<any>{
  return lastValueFrom(this.httpClient.get<Products[]>(this.baseUrl))
}
}
