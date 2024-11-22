import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup


  constructor(private router: Router, private _auth: AuthService, private fb: FormBuilder) {
    this.loginForm = fb.group({
      correo: ['', [Validators.required, Validators.email]],
      clave: ['', Validators.required],
    })
  }

  validarCampo(nombre: string): string {
    return this._auth.validarCampo(nombre, this.loginForm)
  }

  login() {
    if (!this._auth.validarCampos(this.loginForm)) {
      return
    }

  }

}
