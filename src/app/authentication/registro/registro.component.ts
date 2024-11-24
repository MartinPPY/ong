import { Component, inject, OnInit } from '@angular/core';
import { AuthenticacionService } from '../../services/authentication/authenticacion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { MensajeriaService } from '../../services/mensajeria/mensajeria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit {

  //servicios 
  private _authenticationService = inject(AuthenticacionService)
  private _fb = inject(FormBuilder)
  private _mensajeria = inject(MensajeriaService)
  private _router = inject(Router)
  registroForm!: FormGroup
  cargos: any[] = []

  constructor() {
    this.registroForm = this._fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      cargo: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.traerCargos()
  }

  async traerCargos() {
    try {
      const response: any = await lastValueFrom(this._authenticationService.traerCargos())
      this.cargos = response.cargos
    } catch (error: any) {
      console.log(error)
    }
  }

  async registrar() {
    if (!this._authenticationService.validarCampos(this.registroForm)) {
      return
    }
    try {
      const data = this.registroForm.value
      const response: any = await lastValueFrom(this._authenticationService.registrar(data))
      this._mensajeria.alertarExito(response.message)
      this._router.navigate(['/login'])
    } catch (error: any) {
      console.log(error)
    }
  }


}
