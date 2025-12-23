import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ClientPortal } from './client-portal/client-portal';
import { ClientLogin } from './client-login/client-login';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'login', component: ClientLogin },
    { path: 'client-portal', component: ClientPortal },
    { path: 'tracking', loadComponent: () => import('./order-tracking/order-tracking').then(m => m.OrderTracking) }
];
