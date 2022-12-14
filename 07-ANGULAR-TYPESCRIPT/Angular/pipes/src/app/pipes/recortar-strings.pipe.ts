import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recortarStrings'
})
export class RecortarStringsPipe implements PipeTransform {

  transform(value: string, ...args:any[]): string{
    
    let final = (args.length === 0 ) ? 20 : args[0];
    let icono = (args.length === 0 ) ? '...' : args[1];
     return value.split(" ").slice(0, final).join(" ") + icono;
   
  }

}
