import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Products } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl: string = 'https://peticiones.online/api/products/'

  constructor(private httpClient: HttpClient) { }

// getAll(): Promise<any>{
//   return lastValueFrom(this.httpClient.get<Products[]>(this.baseUrl))
// }

getAll(pPage = 1): Promise<any> {
  let rutaFinal = this.baseUrl + '?page=' + pPage;
  return lastValueFrom(this.httpClient.get<any>(rutaFinal));
}

getById(pId:string): Promise<Products> {
  return lastValueFrom(this.httpClient.get<Products>(`${this.baseUrl}${pId}`));
}

delete(pId: string): Promise<any> {
  return lastValueFrom(this.httpClient.delete<any>(`${this.baseUrl}${pId}`));
}

async getAllCategories():Promise<string[]> {
  return lastValueFrom(this.httpClient.get<string[]>(`${this.baseUrl}categories`));
}

create(pFormValue: Products): Promise<Products> {
  return lastValueFrom(this.httpClient.post<Products>(this.baseUrl, pFormValue));
}
update(pFormValue: Products):Promise<any> {
  return lastValueFrom(this.httpClient.put<Products>(`${this.baseUrl}${pFormValue._id}`,pFormValue));
}
}
