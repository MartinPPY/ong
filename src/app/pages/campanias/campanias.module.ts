import { NgModule } from '@angular/core';
import { CampaniasComponent } from './campanias/campanias.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [CampaniasComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CampaniasComponent
  ]
})
export class CampaniasModule { }
