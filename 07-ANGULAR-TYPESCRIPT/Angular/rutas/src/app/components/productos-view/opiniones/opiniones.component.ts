import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Opinion } from 'src/app/interfaces/opinion.interface';
import { OpinionesService } from 'src/app/services/opiniones.service';

@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.component.html',
  styleUrls: ['./opiniones.component.css']
})
export class OpinionesComponent implements OnInit{

  opiniones: Opinion[]=[];

  constructor(
    private opinionesService: OpinionesService,
    private activatedRoute: ActivatedRoute
    ){}

ngOnInit(): void{
  this.activatedRoute.parent?.params.subscribe( (params: any) => {
    let idProducto = parseInt(params.idProducto);
    this.opiniones = this.opinionesService.geByProductId(idProducto);
  })
;}

}
