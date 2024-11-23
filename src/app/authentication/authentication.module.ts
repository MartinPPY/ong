import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [RegistroComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterLink
  ],
})
export class AuthenticationModule { }
