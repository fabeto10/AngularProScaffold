import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../../core/services/auth.service';
import { login, loginSuccess, loginFailure, logout } from './auth.actions';
import { TokenService } from 'src/app/core/services/token.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthEffects {
  private readonly baseUrl: string = environment.apiUrl;

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private http: HttpClient,
    private tokenService: TokenService
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      exhaustMap(({ email, password }) =>
        this.http
          .post<{ token: string }>(`${this.baseUrl}/login`, { email, password })
          .pipe(
            tap((response) => {
              const { token } = response;
              this.tokenService.setToken(token);
            }),
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
