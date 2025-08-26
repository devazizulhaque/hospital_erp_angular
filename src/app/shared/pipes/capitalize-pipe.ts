// src/app/shared/pipes/capitalize.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string | null | undefined): string {
    if (!value) return '';
    
    // Capitalize the first letter of each word
    return value.replace(/\b\w/g, char => char.toUpperCase());
  }

}
