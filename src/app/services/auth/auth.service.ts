import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MensajeriaService } from '../mensajeria/mensajeria.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _mensajeria: MensajeriaService) { }



  validarCampo(nombre: string, formulario: FormGroup): string {

    if (formulario.get(nombre)?.hasError('required') && formulario.get(nombre)?.touched) {
      return `El campo ${nombre} es requerido`
    } else if (formulario.get(nombre)?.hasError('email') && formulario.get(nombre)?.touched) {
      return `Formato invalido!`
    } else {
      return ''
    }

  }

  validarCampos(formulario: FormGroup): boolean {

    const campos = Object.keys(formulario.controls)
    for (let i = 0; i < campos.length; i++) {
      const campo = formulario.get(campos[i])
      if (campo?.errors) {
        this._mensajeria.alertFail(`El campo ${campos[i]} presenta un error!`)
        return false
      }
    }
    return true

  }

}
