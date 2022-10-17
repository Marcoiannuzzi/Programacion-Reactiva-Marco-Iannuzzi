import { Injectable, resolveForwardRef } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Usuario } from '../Models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listaUsuarios : Usuario[] =[
    {
      nombre:"Carlos",
      apellido:"Ruiz",
      edad:35,
      curso:"Angular"
    },
    {
      nombre:"Marcela",
      apellido:"Araniz",
      edad:29,
      curso:"ReactJs"
    },
    {
      nombre:"Gisela",
      apellido:"Aranda",
      edad:26,
      curso:"VueJs"
    }
  ];

  constructor() {
    setTimeout(() => {
      this.listaUsuarios.push(
      {
        nombre:"Lucas",
        apellido:"Martinez",
        edad:28,
        curso:"React"
      }
    )
    }, 3500);

    
   }


  obtenetUsuarioPromise():Promise<Usuario[] | any>{
    return new Promise((resolve, reject) => {
      if(this.listaUsuarios.length > 0){
        resolve(this.listaUsuarios);
      } else{
        reject({
          mensaje:"No hay usuarios ingresados"});
      }
    })
  }

  obtenerUsuarioObservable():Observable<Usuario[]>{
    return of(this.listaUsuarios);
  }


  obtenerUsuarioAngular():Observable<Usuario[]>{
    return of(this.listaUsuarios).pipe(
      map((usuarios:Usuario[])=>usuarios.filter((usuario:Usuario)=>usuario.curso === 'Angular'))
    );
  }

}
