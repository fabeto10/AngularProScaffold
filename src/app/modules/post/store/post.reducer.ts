import { createReducer, on } from '@ngrx/store';
import { loadPostsSuccess, loadPostsFailure } from './post.actions';
import { Post } from '../model/post.model';

export interface PostState {
  posts: Post[];
  error: any;
}

export const initialState: PostState = {
  posts: [],
  error: null,
};

export const postReducer = createReducer(
  initialState,
  on(loadPostsSuccess, (state, { posts }) => ({ ...state, posts })),
  on(loadPostsFailure, (state, { error }) => ({ ...state, error }))
);
