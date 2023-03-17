import { PostState } from '../modules/post/store/post.reducer';
import { AuthState } from './auth/auth.reducer';

export interface AppState {
  auth: AuthState;
  post: PostState;
}
