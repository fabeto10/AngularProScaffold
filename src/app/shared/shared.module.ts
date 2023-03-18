import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveModule } from './directive/directive.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PipesModule, DirectiveModule],
  exports: [PipesModule, DirectiveModule],
})
export class SharedModule {}
