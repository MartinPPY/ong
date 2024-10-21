import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegistroComponent } from './pages/auth/registro/registro.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { HomeComponent } from './pages/home/home/home.component';
import { CampaniasComponent } from './pages/campanias/campanias/campanias.component';
import { CrearCampaniaComponent } from './pages/campania-admin/crear-campania/crear-campania.component';
import { EstadoCampaniaComponent } from './pages/campania-admin/estado-campania/estado-campania.component';
import { ReportesComponent } from './pages/campania-admin/reportes/reportes.component';

export const routes: Routes | [] = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    //rutas de autenticacion y autorizacion
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
    //rutas de administrador de campañas
    {
        path: 'estado-campania',
        component: EstadoCampaniaComponent
    },
    {
        path: 'crear-campania',
        component: CrearCampaniaComponent,
    },
    {
        path: 'reportes',
        component: ReportesComponent,
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];
