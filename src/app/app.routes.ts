import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '',
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home',
      loadChildren: () => import('./home/home.routes').then(c => c.HOME_ROUTES)}
  ]}
];
