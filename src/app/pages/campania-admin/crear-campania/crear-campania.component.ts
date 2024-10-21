import { Component } from '@angular/core';
import { CampaniaService } from '../../../services/campania-services/campania.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-campania',
  templateUrl: './crear-campania.component.html',
  styleUrl: './crear-campania.component.css'
})
export class CrearCampaniaComponent {

  campannaForm?: any

  constructor(private crearCampanna: CampaniaService, private fb: FormBuilder) {
    this.campannaForm = fb.group({
      nombre: ['', [Validators.required]],
      ong: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      meta: ['', [Validators.required]],
    })

  }
  generarCampana() {
    const campos = Object.keys(this.campannaForm.controls)
    for (let i = 0; i < campos.length; i++) {
      const nombreCampo = campos[i]
      const campo = this.campannaForm.get(nombreCampo)

      //primera validacion
      if (campo.errors) {
        alert("campo no valido!")
        return
      }
    }

    const campannas = JSON.parse(localStorage.getItem('campannas') || '[]')

    for (let i = 0; i < campannas.length; i++) {
      if (campannas[i].nombre == this.campannaForm.get('nombre').value) {
        alert("campaña ya existe")
        return
      }
    }

    this.crearCampanna.generarCampania(
      this.campannaForm.get('nombre').value,
      this.campannaForm.get('ong').value,
      this.campannaForm.get('descripcion').value,
      this.campannaForm.get('meta').value,
      'activo',
    )

    alert("campaña creada")


  }


}