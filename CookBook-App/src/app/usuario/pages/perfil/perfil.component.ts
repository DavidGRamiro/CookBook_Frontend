import { Component, OnInit } from '@angular/core';

//Interfaces
import { MenuItem } from 'primeng/api'; // Importa MenuItem para el menú de perfil
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { Receta } from 'src/app/recetas/interface/recetas.interface';
import { Usuario } from '../../interface/usuario.interface';
import { ValidatorService } from 'src/app/auth/services/validator.service';
import { UsuarioConPlan } from '../../interface/usuarioconplan.interface';
import { Notificacion } from '../../interface/notificacion.interface';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{

  listaPerfil: MenuItem[] = [
    {
      label: 'Mi plan',
      icon: 'pi pi-fw pi-calendar',
      command: () => this.cambiarComponenteActivo('mi-plan')
    },
    {
      label: 'Mis recetas favoritas',
      icon: 'pi pi-fw pi-heart',
      command: () => this.cambiarComponenteActivo('mis-recetas-fav')
    },
    {
      label: 'Mis recetas',
      icon: 'pi pi-fw pi-book',
      command: () => this.cambiarComponenteActivo('mis-recetas')
    },
    {
      label: 'Notificaciones',
      icon: 'pi pi-fw pi-bell',
      command: () => this.cambiarComponenteActivo('notificaciones')
    },
    {
      label: 'Editar perfil',
      icon: 'pi pi-fw pi-user-edit',
      command: () => this.cambiarComponenteActivo('editar-perfil')
    },
    {
      label: 'Cerrar sesión',
      icon: 'pi pi-fw pi-sign-out',
      command: () => this.cambiarComponenteActivo('cerrar-sesion')
    }
  ];

  public isLoggedIn: boolean =false;
  usuario!: Usuario;
  recetasFavoritas!: Receta[];
  recetaSeleccionada!: Receta;
  usuarioConPlan!: UsuarioConPlan;
  notificaciones!: Notificacion[];
  componenteActivo: string = '';


  constructor( private _usuarioService: UsuarioService,
    private router: Router,
    private _validator: ValidatorService
) { }

  ngOnInit(): void {

    //Verificams si el usuario ha iniciado sesión
    this._validator.isLoggedIn$.subscribe( data => {
      this.isLoggedIn = data
    })

    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true' ? true : false;
     console.log(this.isLoggedIn)
    if (!this.isLoggedIn) {
      // si el usuario no ha iniciado sesion la pagina /user/perfil no es accesible, redirigir a /login
      this.router.navigate(['/login']);
    } else {
    if(localStorage.getItem('user') != null){
      const userString = localStorage.getItem('user');
      if(userString != null){
        this.usuario = JSON.parse(userString)
      }
    }
    /// El usuario ha iniciado sesión, continuar con la lógica actual del componente
      this._usuarioService.getRecetasFavoritas(this.usuario.idUsuario)
      .subscribe( recetas => {
        this.recetasFavoritas = recetas;
        console.log(this.recetasFavoritas)
      }
      )

    this._usuarioService.getPlandeUsuario(this.usuario.idUsuario)
     .subscribe( usuarioConPlan => {
        this.usuarioConPlan = usuarioConPlan;
        console.log(this.usuarioConPlan)
      }
      )

      this._usuarioService.getNotificaciones(this.usuario.idUsuario)
      .subscribe((notificaciones) => {
        this.notificaciones = notificaciones;
        console.log(this.notificaciones)
      }
      )

    }
  }
  cambiarComponenteActivo(componente: string) {
    console.log("Cambiando al componente", componente);
    this.componenteActivo = componente;
  }

}

