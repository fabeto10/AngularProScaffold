import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

const materialModules = [MatButtonModule, MatIconModule, MatListModule];

@NgModule({
  imports: [...materialModules],
  exports: [...materialModules],
})
export class PostMaterialModule {}
