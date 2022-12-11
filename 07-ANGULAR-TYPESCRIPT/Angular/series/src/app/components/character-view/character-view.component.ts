import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit{

character!: Character;

constructor(
  private activatedRoute: ActivatedRoute,
  private charactersService: CharactersService,
  private router: Router
){}


ngOnInit():void{
  this.activatedRoute.params.subscribe((params:any)=>{
    let id:number = parseInt(params.idcharacter)

    let response = this.charactersService.getById(id);
    if(response){
      this.character = response;
    }
  })
}
}
