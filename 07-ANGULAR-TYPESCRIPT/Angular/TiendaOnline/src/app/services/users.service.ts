import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = 'http://localhost:3000/api/users';

  constructor(private httpClient: HttpClient) { }

  login(formValues: { email: string, password: string }) {
    return lastValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/login`, formValues
      ));
  }
}
