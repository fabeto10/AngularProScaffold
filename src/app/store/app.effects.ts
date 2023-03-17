import { PostEffects } from '../modules/post/store/post.effects';
import { AuthEffects } from './auth/auth.effects';

export const appEffects = [AuthEffects, PostEffects];
