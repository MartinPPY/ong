import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelControlComponent } from './components/panel-control/panel-control.component';

const routes: Routes = [
  { path: 'panel-control', component: PanelControlComponent },
  // otras rutas para este módulo
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminOngRoutingModule { }
