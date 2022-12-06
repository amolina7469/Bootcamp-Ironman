import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

arrChannels: string[]=[];  

constructor(private seriesService: SeriesService){}

ngOnInit(){
  this.arrChannels = this.seriesService.getAllChannels();
}

}
