import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticacionService } from '../../services/authentication/authenticacion.service';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private _fb = inject(FormBuilder)
  private _authenticactionService = inject(AuthenticacionService)
  private _router = inject(Router)
  loginForm!: FormGroup

  constructor() {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  async login() {
    if (!this._authenticactionService.validarCampos(this.loginForm)) {
      return
    }
    try {
      const data = this.loginForm.value
      const response: any = await lastValueFrom(this._authenticactionService.login(data))
      console.log(response)
      const cargo: any = response.user.cargo
      localStorage.setItem('cargo', JSON.stringify(cargo))
      const token: any = response.token
      localStorage.setItem('token', JSON.stringify(token))
      this._router.navigate(['home'])
    } catch (error: any) {
      console.log(error)
    }
  }

}
