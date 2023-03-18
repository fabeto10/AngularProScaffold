import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { Store } from '@ngrx/store';
import { login, logout } from '../../store/auth/auth.actions';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private tokenService: TokenService, private store: Store) {}

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
