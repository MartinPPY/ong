import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegistroComponent } from './pages/auth/registro/registro.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { HomeComponent } from './pages/home/home/home.component';
import { CampaniasComponent } from './pages/campanias/campanias/campanias.component';
import { CampaniasDetailComponent } from './pages/campanias/campanias-detail/campanias-detail.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch:'full'
    },
    {
        path: 'login',
        component: LoginComponent,


    },
    {
        path: 'registro',
        component: RegistroComponent,


    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,


    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'campanias',
        component: CampaniasComponent,
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch:'full'
    },
];
