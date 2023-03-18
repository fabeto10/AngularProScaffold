import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PostMaterialModule } from './post-material.module';
import { TitleBodyInputComponent } from './inputs/title-body-input/title-body-input.component';

@NgModule({
  declarations: [TitleBodyInputComponent],
  imports: [CommonModule, ReactiveFormsModule, PostMaterialModule],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    PostMaterialModule,
    TitleBodyInputComponent,
  ],
  providers: [],
})
export class PostModule {}
