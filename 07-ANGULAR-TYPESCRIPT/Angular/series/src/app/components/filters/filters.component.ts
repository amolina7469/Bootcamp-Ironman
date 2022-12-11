import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

arrChannels: string[]=[];  
selectActive: boolean= true;
constructor(
  private seriesService: SeriesService,
  private router: Router
  ){}

ngOnInit(){
  this.arrChannels = this.seriesService.getAllChannels();
}

ngDoCheck(): void{
  let path = this.router.url;
  this.selectActive = (path.includes('personaje') ? false : true);
}

getChannel($event: any):void{
  if($event.target.value === 'todas'){
    this.router.navigate(['/series']);
  }else {
    this.router.navigate(['/series', this.urlSanitizer($event.target.value)]);
  }
}

urlSanitizer(pChannel: any): string{
  let resultado = pChannel.split(" ")[0];
  return resultado.toLowerCase();
}
}
