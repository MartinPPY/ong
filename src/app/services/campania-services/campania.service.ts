import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CampaniaService {

  constructor() { }


  generarCampania(nombre: string, ong: string, descripcion: string, meta: number, estado:string) {

    const campannas = JSON.parse(localStorage.getItem('campannas') || '[]')

    const data = {
      nombre: nombre,
      ong: ong,
      meta: meta,
      descripcion: descripcion,
      estado: estado 
    }

    campannas.push(data)

    localStorage.setItem('campannas',JSON.stringify(campannas))


  }

}


