import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RegistroComponent,LoginComponent,ForgotPasswordComponent],
  imports: [
    CommonModule,
    MatProgressBarModule,
    RouterLink,
    ReactiveFormsModule
  ],
  exports: [RegistroComponent,LoginComponent,ForgotPasswordComponent]
})
export class AuthModule { }
