import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  forgotForm!: FormGroup

  constructor(private _auth: AuthService, private fb: FormBuilder) {
    this.forgotForm = fb.group({
      correo: ['', [Validators.required, Validators.email]]
    })
  }

  forgotPassword() {
    if (!this._auth.validarCampos(this.forgotForm)) {
      return
    }

  }

  validarCampo(nombre: string): string {
    return this._auth.validarCampo(nombre, this.forgotForm)
  }

}
