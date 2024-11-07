import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MensajeriaService {

  constructor() { }

  alertFail(mensaje: string) {

    Swal.fire({
      icon: "error",
      title: "ATENCION!",
      text: mensaje
    });

  }

}
