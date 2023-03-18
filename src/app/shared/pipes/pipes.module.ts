import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstLetterUppercasePipe } from 'src/app/shared/pipes/first-letter-uppercase.pipe';

@NgModule({
  declarations: [FirstLetterUppercasePipe],
  imports: [CommonModule],
  exports: [FirstLetterUppercasePipe],
})
export class PipesModule {}
