import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { Character } from 'src/app/interfaces/character.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

characters: Character[]=[];
page!: number;
notImage : string = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";
constructor(private characterService: CharactersService){}

ngOnInit() {
  this.characterService.getAllCharacters().subscribe((data:any)=> {
  this.characters = data.data.results;
  console.log(this.characters);
  });  
 }
}
