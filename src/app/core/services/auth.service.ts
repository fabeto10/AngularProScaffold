import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { environment } from '../../../environments/environment';
import * as AuthActions from '../../store/auth/auth.actions';
import { catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private store: Store) {}

  login(email: string, password: string) {
    const url = `${environment.apiUrl}/auth/login`;

    // Replace this with your actual API call.
    // This is a mock response to simulate a successful login.
    return this.http.post(url, { email, password }).pipe(
      tap((response: any) => {
        this.store.dispatch(
          AuthActions.loginSuccess({ token: response.accessToken })
        );
      }),
      catchError((error) => {
        this.store.dispatch(AuthActions.loginFailure({ error }));
        throw error;
      })
    );
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
}
