import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../../core/services/auth.service';
import { login, loginSuccess, loginFailure, logout } from './auth.actions';

@Injectable()
export class AuthEffects {
  private apiUrl = 'https://your-auth-api-url';

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private http: HttpClient
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      exhaustMap(({ email, password }) =>
        this.http
          .post<{ token: string }>(`${this.apiUrl}/login`, { email, password })
          .pipe(
            map((response) => loginSuccess({ token: response.token })),
            catchError((error) => of(loginFailure({ error })))
          )
      )
    )
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        tap(() => this.authService.logout())
      ),
    { dispatch: false }
  );
}
