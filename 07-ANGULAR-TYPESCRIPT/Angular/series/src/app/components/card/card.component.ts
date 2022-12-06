import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';
import { Serie } from 'src/app/interfaces/serie.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

@Input() miItem!: Serie | Character | any;

name: string = "";
url: string = "";
ngOnInit(){
  this.name = (this.miItem.titulo) ? this.miItem.titulo : this.miItem.nombre_real;
  this.url = (this.miItem.titulo)? '/serie' : '/personaje';
}
}
