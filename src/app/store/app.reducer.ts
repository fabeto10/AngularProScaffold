import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';

import { AuthReducer } from './auth/auth.reducer';
import { PostReducer } from '../modules/post/store/post.reducer';

export const appReducers: ActionReducerMap<AppState> = {
  auth: AuthReducer,
  post: PostReducer,
};
