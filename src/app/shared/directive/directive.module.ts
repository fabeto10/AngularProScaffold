import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstLetterHighlightDirective } from './first-letter-highlight.directive';

@NgModule({
  declarations: [FirstLetterHighlightDirective],
  imports: [CommonModule],
  exports: [FirstLetterHighlightDirective],
})
export class DirectiveModule {}
