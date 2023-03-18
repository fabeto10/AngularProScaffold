import { createReducer, on } from '@ngrx/store';
import {
  loadPostsSuccess,
  loadPostsFailure,
  createPostSuccess,
  createPostFailure,
  updatePostSuccess,
  updatePostFailure,
  deletePostSuccess,
  deletePostFailure,
} from './post.actions';
import { Post } from '../model/post.model';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

export interface PostState extends EntityState<Post> {
  error: any;
}

export const adapter = createEntityAdapter<Post>();
export const initialState = adapter.getInitialState({
  error: null,
});

export const PostReducer = createReducer(
  initialState,
  on(loadPostsSuccess, (state, { posts }) =>
    adapter.setAll(posts, { ...state })
  ),
  on(loadPostsFailure, (state, { error }) => ({ ...state, error })),

  on(createPostSuccess, (state, { post }) =>
    adapter.addOne(post, { ...state, error: null })
  ),
  on(createPostFailure, (state, { error }) => {
    return { ...state, error };
  }),

  on(updatePostSuccess, (state, { post }) =>
    adapter.updateOne({ id: post.id, changes: post }, { ...state, error: null })
  ),
  on(updatePostFailure, (state, { error }) => {
    return { ...state, error };
  }),

  on(deletePostSuccess, (state, { id }) =>
    adapter.removeOne(id, { ...state, error: null })
  ),
  on(deletePostFailure, (state, { error }) => {
    return { ...state, error };
  })
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
