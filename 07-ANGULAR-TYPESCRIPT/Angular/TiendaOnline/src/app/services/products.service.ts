import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = 'http://localhost:3000/api/products';

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return lastValueFrom(
      this.httpClient.get<any[]>(this.baseUrl)
    );
  }

  create(formValues: FormData) {
    return lastValueFrom(
      this.httpClient.post<any>(this.baseUrl, formValues)
    );
  }
}
