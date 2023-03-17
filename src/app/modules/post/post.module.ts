import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MatListModule } from '@angular/material/list';

import { PostListComponent } from './components/post-list/post-list.component';
import { postReducer } from './store/post.reducer';
import { PostEffects } from './store/post.effects';

@NgModule({
  declarations: [PostListComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    MatListModule,
    StoreModule.forFeature('post', postReducer),
    EffectsModule.forFeature([PostEffects]),
  ],
})
export class PostModule {}
