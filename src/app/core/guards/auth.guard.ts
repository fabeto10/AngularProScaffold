import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export function authGuard({
  redirectTo,
  isProtected = true,
}: {
  redirectTo?: any[];
  isProtected?: boolean;
} = {}): CanMatchFn {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const isLoggedIn = authService.isAuthenticated();

    if (isProtected) {
      if (isLoggedIn) {
        return true;
      }
      return router.createUrlTree(redirectTo ?? ['login']);
    } else {
      if (!isLoggedIn) {
        return true;
      }

      return router.createUrlTree(redirectTo ?? ['dashboard']); // replace dashboard to your entry point for auth users
    }
  };
}
