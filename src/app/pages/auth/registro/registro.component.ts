import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  formularioRegistro!: FormGroup //aca colocamos el ! para indicar que la variable no sera nula y no puede ser nula

  constructor(private fb: FormBuilder, private _auth: AuthService) {

    //inicar formulario reactivo de registro con fb
    this.formularioRegistro = fb.group({

      nombre: ['', Validators.required],//required significa que el campo es requerido
      correo: ['', [Validators.required, Validators.email]], //ademas de required se valida si el correo es valido
      clave: ['', Validators.required],
      ocupacion: ['', Validators.required]

    })

  }

  //metodo para registrar usuarios
  registrar() {
    if (!this._auth.validarCampos(this.formularioRegistro)) {
      return
    }
    console.log(this.formularioRegistro.value)

  }

  validarCampo(nombre: string): string {

    return this._auth.validarCampo(nombre, this.formularioRegistro)

  }



}
