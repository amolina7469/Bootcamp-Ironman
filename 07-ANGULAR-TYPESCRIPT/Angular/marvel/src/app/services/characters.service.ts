import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

publicKey ='807732bbc92285931b4245c12b936035';
hash = '37329b7a11dcd6f06371a7209876603a';
baseUrl = `https://gateway.marvel.com:443/v1/public/characters`;
// https://gateway.marvel.com:443/v1/public/characters/1009546?apikey=807732bbc92285931b4245c12b936035&ts=1&hash=37329b7a11dcd6f06371a7209876603a

  constructor(private httpClient : HttpClient) { }

  getAllCharacters(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + `?limit=100&offset=606&ts=1&apikey=${this.publicKey}&hash=${this.hash}`);
}

  getById(pId: number): Observable<any>{
    console.log(pId);
    return this.httpClient.get<any>(this.baseUrl + "/" + pId + `?apikey=${this.publicKey}&ts=1&hash=${this.hash}`)
  }

  getComicsById(pId:number): Observable<any>{
    return this.httpClient.get<any>(this.baseUrl + "/" + pId + `/comics?apikey=${this.publicKey}&ts=1&hash=${this.hash}`)
  }
}
