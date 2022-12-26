import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

publicKey ='807732bbc92285931b4245c12b936035';
hash = '37329b7a11dcd6f06371a7209876603a';
// baseUrl = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${this.publicKey}&hash=${this.hash}`;
baseUrl = `https://gateway.marvel.com:443/v1/public/characters?limit=20&offset=0&ts=1&apikey=${this.publicKey}&hash=${this.hash}`;

  constructor(private httpClient : HttpClient) { }

  getAllCharacters(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl);
}}
