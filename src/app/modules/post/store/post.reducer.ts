import { createReducer, on } from '@ngrx/store';
import { loadPostsSuccess, loadPostsFailure } from './post.actions';

export interface PostState {
  posts: any[];
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
