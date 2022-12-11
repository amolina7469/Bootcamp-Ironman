import { Component, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent {

@Input() myCharacter!:Character

constructor(
  private charactersService: CharactersService,
  private activatedRoute: ActivatedRoute
  ){}

}


