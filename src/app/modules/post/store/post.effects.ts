import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, mergeMap, tap } from 'rxjs/operators';
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
          // tap((posts: Post[]) => console.log('Posts loaded:', posts)),
          map((posts: Post[]) => PostActions.loadPostsSuccess({ posts })),
          catchError((error) => of(PostActions.loadPostsFailure({ error })))
        )
      )
    )
  );

  createPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.createPost),
      mergeMap(({ post }) =>
        this.apiService.createPost(post).pipe(
          map((newPost: Post) =>
            PostActions.createPostSuccess({ post: newPost })
          ),
          catchError((error) => of(PostActions.createPostFailure({ error })))
        )
      )
    )
  );

  updatePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.updatePost),
      mergeMap(({ post }) =>
        this.apiService.updatePost((post as Post).id, post as Post).pipe(
          map((updatedPost: Post) =>
            PostActions.updatePostSuccess({ post: updatedPost })
          ),
          catchError((error) => of(PostActions.updatePostFailure({ error })))
        )
      )
    )
  );

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.deletePost),
      mergeMap(({ id }) =>
        this.apiService.deletePost(id).pipe(
          map(() => PostActions.deletePostSuccess({ id })),
          catchError((error) => of(PostActions.deletePostFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private apiService: PostApiService) {}
}
