import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { Store } from '@ngrx/store';
import { login, logout } from '../../store/auth/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://your-auth-api-url'; // Replace with your authentication API URL

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private store: Store
  ) {}

  login(email: string, password: string): void {
    this.store.dispatch(login({ email, password }));
  }

  logout(): void {
    this.store.dispatch(logout());
  }

  isAuthenticated(): boolean {
    return this.tokenService.hasToken();
  }
}
