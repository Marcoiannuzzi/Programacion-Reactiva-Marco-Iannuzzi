import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Usuario } from './Models/usuario';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Desafio: "promesas y observables"';
  listaUsuarios!:Usuario[];
  listaUsuarios$!:Observable<Usuario[]>;
  usuariosAngular$!:Observable<Usuario[]>;

  constructor(private usuarioService:UsuarioService){ }

  
  ngOnInit(): void {
    this.listaUsuarios$=this.usuarioService.obtenerUsuarioObservable()
    this.usuariosAngular$ = this.usuarioService.obtenerUsuarioAngular()
  }

  obtenerUsuarios():any{
    this.usuarioService.obtenetUsuarioPromise()
      .then((data)=>this.listaUsuarios=data)
      .catch((error)=>console.log(error));
  }

  ngOnDestroy():void{

  }



}
