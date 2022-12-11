import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit{
 character: Character | any;

 constructor(
  private charactersService: CharactersService,
  private activatedRoute: ActivatedRoute
  ){}

 ngOnInit(): void{
  this.activatedRoute.params.subscribe((params:any)=>{
    let id = parseInt(params.idCharacter);

    this.charactersService.getById(id).subscribe((data:Character)=> this.character = data)
  })
 }
}
