import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sentence } from 'src/app/interfaces/sentence.interface';
import { SentencesService } from 'src/app/services/sentences.service';

@Component({
  selector: 'app-sentences-list',
  templateUrl: './sentences-list.component.html',
  styleUrls: ['./sentences-list.component.scss']
})
export class SentencesListComponent implements OnInit{

@Input() category: string="";

sentence!: Sentence;

constructor(
  private sentencesService: SentencesService,
  private activatedRoute: ActivatedRoute){}
  
  
 ngOnInit(): void{
  
    this.activatedRoute.queryParams.subscribe(async (queryParams: any)=>{
      let categoria = queryParams.category;
      if(categoria !== undefined){
        this.sentence =await this.sentencesService.getData(categoria);
      }else {
        this.sentence = await this.sentencesService.getRandom();
      }
    })

  }
}
