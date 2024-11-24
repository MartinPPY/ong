import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [RegistroComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    HttpClientModule
  ],
})
export class AuthenticationModule { }
