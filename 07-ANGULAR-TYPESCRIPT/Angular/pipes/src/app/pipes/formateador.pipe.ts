import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'formateador'
})
export class FormateadorPipe implements PipeTransform {

constructor(private domSnitizer: DomSanitizer){}

  transform(
    value: string, 
    color:string = "", 
    negrita:string = "regular", 
    transform: string = ""): SafeHtml {
   
    return this.domSnitizer.bypassSecurityTrustHtml( `<span style="color: ${color}; font-weight: ${negrita}; text-transform: ${transform}">${value}</span>`);
  }

}
