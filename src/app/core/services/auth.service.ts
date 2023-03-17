import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenService } from './token.service';
import { Store } from '@ngrx/store';
import { login, logout } from '../../store/auth/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://your-auth-api-url';
  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private store: Store
  ) {}

  login(email: string, password: string): Observable<{ token: string }> {
    const payload = {
      email,
      password,
    };

    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, payload);
  }

  logout(): void {
    this.store.dispatch(logout());
  }

  isAuthenticated(): boolean {
    return this.tokenService.hasToken();
  }
}
