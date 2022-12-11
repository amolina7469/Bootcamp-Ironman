import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

 arrCharacters: Character[]=[];

 constructor(
  private charactersService: CharactersService
 ){}
 
 ngOnInit(): void{
  this.charactersService.getAll().subscribe( (data: Character[])=>{
    this.arrCharacters = data;
  })
 }
}
