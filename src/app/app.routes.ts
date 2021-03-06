import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { DashboardComponent } from './dashboard';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'home',       component: HomeComponent },
  { path: 'dashboard',  component: DashboardComponent }
];
