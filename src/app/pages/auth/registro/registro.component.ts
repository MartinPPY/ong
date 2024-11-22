import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { lastValueFrom } from 'rxjs';
import { MensajeriaService } from '../../../services/mensajeria/mensajeria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  formularioRegistro!: FormGroup //aca colocamos el ! para indicar que la variable no sera nula y no puede ser nula

  constructor(private fb: FormBuilder, private _auth: AuthService, private _mensajeria: MensajeriaService, private _router: Router) {

    //inicar formulario reactivo de registro con fb
    this.formularioRegistro = fb.group({

      nombre: ['', Validators.required],//required significa que el campo es requerido
      apellido: ['', Validators.required],//required significa que el campo es requerido
      correo: ['', [Validators.required, Validators.email]], //ademas de required se valida si el correo es valido
      clave: ['', Validators.required],
      ocupacion: ['', Validators.required]

    })

  }

  //metodo para registrar usuarios
  async registrar() {

    try {

      const data = {
        nombre: this.formularioRegistro.get('nombre')?.value,
        apellido: this.formularioRegistro.get('apellido')?.value,
        cargo: this.formularioRegistro.get('ocupacion')?.value,
        email: this.formularioRegistro.get('correo')?.value,
        password: this.formularioRegistro.get('clave')?.value
      }
      const response: any = await lastValueFrom(this._auth.registrar(data))
      console.log(response)
      this._mensajeria.alertSucces(response.message)
      this._router.navigate(['login'])



    } catch (error: any) {

      console.log(error)

    }
  }


  validarCampo(nombre: string): string {
    return this._auth.validarCampo(nombre, this.formularioRegistro)
  }



}
