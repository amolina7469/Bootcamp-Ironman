import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/usuarios';
  }

  register(formValues: any): Promise<any> {
    return lastValueFrom(this.httpClient.post<any>(`${this.baseUrl}/registro`, formValues));
  }

  login(formValues: any): Promise<any> {
    return lastValueFrom(this.httpClient.post<any>(`${this.baseUrl}/login`, formValues));
  }

  isLogged(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

}
