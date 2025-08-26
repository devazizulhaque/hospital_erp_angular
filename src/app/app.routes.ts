// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
import { Login } from './features/auth/login/login';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'dashboard', 
    pathMatch: 'full' 
  },
  { 
    path: 'dashboard', 
    loadChildren: () => import('./features/dashboard/dashboard-module').then(m => m.DashboardModule),
    canActivate: [authGuard],
    data: { title: 'Dashboard' }
  },
  { 
    path: 'users', 
    loadChildren: () => import('./features/users/users-module').then(m => m.UsersModule),
    canActivate: [authGuard],
    data: { title: 'Users' }
  },
  { path: 'login', component: Login, data: { title: 'Login' } },
  { 
    path: '**', 
    redirectTo: 'dashboard' 
  }
];
