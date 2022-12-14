import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SentencesService } from 'src/app/services/sentences.service';
import { Sentence } from 'src/app/interfaces/sentence.interface'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

arrCategories: string[]=[];
selection:string ="";


constructor(
  private sentenceService : SentencesService,
  private router: Router
  ){}

async ngOnInit(): Promise<void> {
  this.arrCategories = await this.sentenceService.getAllCategories();
  console.log(this.arrCategories);
}
 
async capturarCat($event:any){
this.selection = $event.target.value;
console.log(this.selection);
if($event.target.value !== ""){
  this.router.navigateByUrl('/?category=' + this.selection)
  }
}
}
