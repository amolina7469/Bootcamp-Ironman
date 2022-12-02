import { Injectable } from '@angular/core';
import { CHARACTERS } from '../db/personajes.db';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private arrCharacters: Character[] = CHARACTERS;
  constructor() { }

  getAll() : Character[] {
    return this.arrCharacters
  }

  getById(pId: any){
    return this.arrCharacters.find(character => character.id === pId);
  }
}
