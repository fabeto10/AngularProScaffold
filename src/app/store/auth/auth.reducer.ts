import { createReducer, on, Action } from '@ngrx/store';
import { loginSuccess, loginFailure, logout } from './auth.actions';

export interface AuthState {
  token: string | null;
  error: any;
}

export const initialState: AuthState = {
  token: null,
  error: null,
};

export const AuthReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { token }) => ({ ...state, token })),
  on(loginFailure, (state, { error }) => ({ ...state, error })),
  on(logout, (state) => ({ ...state, token: null }))
);

export function reducer(state: AuthState | undefined, action: Action) {
  return AuthReducer(state, action);
}
