import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Sentence } from '../interfaces/sentence.interface';


@Injectable({
  providedIn: 'root'
})
export class SentencesService {

  private baseUrl: string= 'https://api.chucknorris.io/jokes/';
  
  constructor(private httpClient: HttpClient) { }

  getAllCategories(): Promise<string[]>{
    return lastValueFrom(this.httpClient.get<string[]>(`${this.baseUrl}categories`))
  }
  // getAllCategories(): Observable<string[]>{
  //   return this.httpClient.get<string[]>(`${this.baseUrl}categories`);
  // }

  getData(pCategory: string){
    return lastValueFrom(this.httpClient.get<Sentence>(`${this.baseUrl}random?category=${pCategory}`))
  }

  // getRandomSentenceByCategory(pCategory: string):Observable<Sentence>{
  //   return this.httpClient.get<Sentence>(`${this.baseUrl}random?category=${pCategory}`)

  // }

  getRandom():Promise<Sentence>{
    return lastValueFrom(this.httpClient.get<Sentence>(`${this.baseUrl}random`))
  }

}
