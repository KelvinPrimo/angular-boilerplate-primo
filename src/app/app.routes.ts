import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: AppComponent, children: [
        { path: '', component: HomeComponent },
        { path: 'pages', loadComponent: () => import('./pages/pages.component').then(m => m.PagesComponent) },
    ]},
];
