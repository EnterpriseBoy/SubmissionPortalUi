import { Routes } from '@angular/router';
import { Layout } from './layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home').then(m => m.Home)
      },
      {
        path: 'announcements',
        loadComponent: () =>
          import('./pages/announcements/announcements').then(m => m.Announcements)
      },
      {
        path: 'faqs',
        loadComponent: () =>
          import('./pages/faq/faq').then(m => m.Faq)
      },
      {
        path: 'information',
        loadComponent: () =>
          import('./pages/information/information').then(m => m.Information)
      },
      {
        path: 'contacts',
        loadComponent: () =>
          import('./pages/contacts/contacts').then(m => m.Contacts)
      },
      {
        path: 'policies',
        loadComponent: () =>
          import('./pages/policies/policies').then(m => m.Policies)
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./pages/register/register').then(m => m.Register)
      },

      // Default route
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },

  // Wildcard fallback
  { path: '**', redirectTo: 'home' }
];
