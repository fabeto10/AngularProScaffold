import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';

import * as AuthReducer from './auth/auth.reducer';
import * as PostReducer from '../modules/post/store/post.reducer';

export const appReducers: ActionReducerMap<AppState> = {
  auth: AuthReducer.authReducer,
  post: PostReducer.postReducer,
};
