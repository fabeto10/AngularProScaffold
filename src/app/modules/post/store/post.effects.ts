import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as PostActions from './post.actions';
import { Post } from '../model/post.model';
import { PostApiService } from '../services/api.service';

@Injectable()
export class PostEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.loadPosts),
      switchMap(() =>
        this.apiService.getPosts().pipe(
          map((posts: Post[]) => PostActions.loadPostsSuccess({ posts })),
          catchError((error) => of(PostActions.loadPostsFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private apiService: PostApiService) {}
}
