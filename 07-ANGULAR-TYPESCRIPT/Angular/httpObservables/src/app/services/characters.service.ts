import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
private arrCharacters: Character[] = [];
private baseUrl: string = 'https://thronesapi.com/api/v2/Characters'

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<Character[]>{
    return this.httpClient.get<Character[]>(this.baseUrl);
  }

  getById(pId:number):Observable<Character>{
    return this.httpClient.get<Character>(`${this.baseUrl}/${pId}`)
  }
}
