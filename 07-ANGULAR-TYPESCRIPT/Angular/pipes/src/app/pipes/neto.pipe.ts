import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'neto'
})
export class NetoPipe implements PipeTransform {

  transform(value: number, ...args: any[]): number{
    let irpf = (args.length !== 0 ) ? 0.13 : args[0]/100;
    

    return value - (value * irpf);
  }

}
