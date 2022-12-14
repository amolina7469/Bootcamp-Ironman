import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vueltecita'
})
export class VueltecitaPipe implements PipeTransform {

  transform(value: string): string {
    // return value.split("").reverse().join(""); Del revés por letra.
    return value.split(" ").reverse().join(" "); // Del revés por palabra.
  }

}
