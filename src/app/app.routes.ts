import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { RegistroComponent } from './modules/auth/components/registro/registro.component';
import { AddCampaingComponent } from './modules/admin-campaing/components/add-campaing/add-campaing.component';
import { PanelControlComponent } from './modules/admin-ong/components/panel-control/panel-control.component';

export const routes: Routes = [
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'registro',
        component: RegistroComponent
    },
    {
        path:'addcampaing',
        component: AddCampaingComponent
    },
    {
        path:'panelcontrol',
        component: PanelControlComponent
    },
];
