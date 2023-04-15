import { Component } from '@angular/core';

//Interfaces
import { listaPerfil } from '../../interface/perfil.lista.interface';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  listaPerfil : listaPerfil[] = [
    { item: 'Mis recetas', ruta: 'misrecetas'},
    { item: 'Notificaciones', ruta: 'notificaciones'},
    { item: 'Mi perfil', ruta: 'perfil'},
    { item: 'Cerrar sesión', ruta: 'logout' }
  ]

}
