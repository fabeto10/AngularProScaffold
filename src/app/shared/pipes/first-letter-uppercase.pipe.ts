import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterUppercase',
  pure: true,
})
export class FirstLetterUppercasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    const trimmedValue = value.trim();
    return trimmedValue.charAt(0).toUpperCase() + trimmedValue.slice(1);
  }
}
