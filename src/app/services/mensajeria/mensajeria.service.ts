import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MensajeriaService {

  alertarFallo(mensaje: string) {
    Swal.fire({
      icon: "error",
      title: "Ha ocurrido un error!",
      text: mensaje
    });
  }

  alertarExito(mensaje: string) {
    Swal.fire({
      icon: "success",
      title: mensaje,
      showConfirmButton: false,
      timer: 1500
    });
  }

}
