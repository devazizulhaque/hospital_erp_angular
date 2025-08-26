// src/app/core/guards/auth-guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);

  if (auth.isLoggedIn()) {
    return true;
  }

  // Remove invalid token
  localStorage.removeItem('auth_token');

  // Encode current URL for safe return after login
  const returnUrl = encodeURIComponent(state.url);

  // Redirect to login with returnUrl query param
  router.navigate(['/login'], { queryParams: { returnUrl } });

  return false;
};
