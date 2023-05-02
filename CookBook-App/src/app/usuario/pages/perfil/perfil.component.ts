import { Component, OnInit } from '@angular/core';

//Interfaces
import { listaPerfil } from '../../interface/perfil.lista.interface';

import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Receta } from 'src/app/recetas/interface/recetas.interface';
import { Usuario } from '../../interface/usuario.interface';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{

  listaPerfil : listaPerfil[] = [
    { item: 'Mis recetas', ruta: 'misrecetas'},
    { item: 'Notificaciones', ruta: 'notificaciones'},
    { item: 'Mi perfil', ruta: 'perfil'},
    { item: 'Cerrar sesión', ruta: 'logout' }
  ]

  usuario!: Usuario;
  recetasFavoritas!: Receta[];


  ngOnInit(): void {
    //Recupera el id del usuario dependiendo de la ruta en la que nos encontremos.
    //Llamamos al servicio y le mandamos por parámetro el id del usuario que queremos recuperar.
    this._activatedRoute.params
          .pipe(
            switchMap( ({ idUsuario } )=>
            this._usuarioService.getUserById(idUsuario)))
          // .subscribe( response => this.usuario = response);
    //Recuperamos las recetas favoritas del usuario.
    this._activatedRoute.params.pipe(
      switchMap( ({ idUsuario } )=>
      this._usuarioService.getRecetasFavoritas(idUsuario)))
    .subscribe( response => this.recetasFavoritas = response
    )

  }

  constructor( private _usuarioService: UsuarioService,
              private _activatedRoute : ActivatedRoute,
     ) { }
}

