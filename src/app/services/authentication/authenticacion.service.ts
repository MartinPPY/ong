import { inject, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MensajeriaService } from '../mensajeria/mensajeria.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticacionService {

  private urlLocal: string = 'http://localhost:3000'
  private _mensajeria = inject(MensajeriaService)
  private _httpClient = inject(HttpClient)
  private _router = inject(Router)


  validarCampos(formulario: FormGroup): boolean {
    const campos = Object.keys(formulario.controls)
    for (let i = 0; i < campos.length; i++) {
      const campo = formulario.get(campos[i])
      if (campo?.errors) {
        this._mensajeria.alertarFallo('Revisa los campos!')
        return false
      }
    }
    return true
  }

  validarCampo(formulario: FormGroup, nombre: string): string {
    return ''
  }

  traerCargos(): Observable<any> {
    return this._httpClient.get(`${this.urlLocal}/cargo/all_cargos`)
  }

  registrar(data: any): Observable<any> {
    return this._httpClient.post(`${this.urlLocal}/auth/register`, data)
  }

  login(data: any): Observable<any> {
    return this._httpClient.post(`${this.urlLocal}/auth/login`, data)
  }

  logout(){
    localStorage.clear()
    this._router.navigate(['/login'])
  }



}
