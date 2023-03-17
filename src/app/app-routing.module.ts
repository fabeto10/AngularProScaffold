import { NgModule, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule, provideState } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { postReducer } from './modules/post/store/post.reducer';
import { PostEffects } from './modules/post/store/post.effects';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  },
  {
    path: 'posts',
    providers: [
      importProvidersFrom(
        // register feature reducer
        StoreModule.forFeature('post', postReducer),
        // run feature effects
        EffectsModule.forFeature([PostEffects])
      ),
    ],
    loadComponent: () =>
      import('./modules/post/components/post-list/post-list.component').then(
        (m) => m.PostListComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
