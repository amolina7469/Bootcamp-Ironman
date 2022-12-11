import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = 'https://reqres.in/api';
  
  constructor(private httpClient: HttpClient) { }

  // El servicio va a hacer peticiones HTTP, necesitamos el HttpClientModule, httpclient y la url a la que nos conectamos.
  create(pUser:User): Promise<any> {  
    return lastValueFrom(this.httpClient.post<User>(this.baseUrl + '/users', pUser, this.getHeaders()))
  }
  login(pFormValue: any):Promise<any>{
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl + '/login', pFormValue, this.getHeaders()))
  }


  getHeaders():any{
    return {
      header: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
  }


}
