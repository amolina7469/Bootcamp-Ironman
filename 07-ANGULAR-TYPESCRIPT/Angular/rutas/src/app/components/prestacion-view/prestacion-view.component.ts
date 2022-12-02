import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prestacion } from 'src/app/interfaces/prestacion.interface';
import { PrestacionesService } from 'src/app/services/prestaciones.service';


@Component({
  selector: 'app-prestacion-view',
  templateUrl: './prestacion-view.component.html',
  styleUrls: ['./prestacion-view.component.css']
})
export class PrestacionViewComponent  implements OnInit{
  miPrestacion: Prestacion = {id:0,title:"",text:"",url:""};
  constructor(
    private prestacionesServices: PrestacionesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe( (params:any) => {
      let url = params.url;
      let response = this.prestacionesServices.getByUrl(url);

      if(response === undefined){
        this.router.navigate(['/prestaciones']);
      } else {
        this.miPrestacion = response;

      }
    })
  }
}
