import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { CrearCampaniaComponent } from './crear-campania/crear-campania.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CrearCampaniaComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    ReactiveFormsModule
  ],
  exports: [CrearCampaniaComponent]
})
export class CampaniaAdminModule { }
