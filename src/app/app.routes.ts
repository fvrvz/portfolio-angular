import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((c) => c.Home),
    title: 'Home | My Portfolio',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((c) => c.About),
    title: 'About | My Portfolio',
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/projects/projects').then((c) => c.Projects),
    title: 'Projects | My Portfolio',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact').then((c) => c.Contact),
    title: 'Contact | My Portfolio',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
