import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';
import { Character } from 'src/app/interfaces/character.interface';
import { Comic } from 'src/app/interfaces/comic.interface';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  characters: Character[]=[];
  comics: Comic[]=[];
  constructor(
    private activatedRoute : ActivatedRoute,
    private charactersService: CharactersService,
    private router : Router
    ){}

    ngOnInit(){
      this.activatedRoute.params.subscribe((params: any)=>{
        let id = parseInt(params.idcharacter)
        console.log(id);
        this.charactersService.getComicsById(id).subscribe((data:any)=>{
          this.comics = data.data.results;
          console.log(this.comics);
        });
        this.charactersService.getById(id).subscribe((data: any)=>{
            this.characters = data.data.results;
            console.log(this.characters);
        });
  
      })
    }
}
