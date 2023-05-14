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
      routerLink: 'mi-plan'
    },
    {
      label: 'Mis recetas favoritas',
      icon: 'pi pi-fw pi-heart',
      routerLink: 'mis-recetas-favoritas'
    },
    {
      label: 'Mis recetas',
      icon: 'pi pi-fw pi-book',
      routerLink: 'mis-recetas'
    },
    {
      label: 'Notificaciones',
      icon: 'pi pi-fw pi-bell',
      routerLink: 'notificaciones'
    },
    {
      label: 'Editar perfil',
      icon: 'pi pi-fw pi-user-edit',
      routerLink: 'editar-perfil'
    },
    {
      label: 'Cerrar sesión',
      icon: 'pi pi-fw pi-sign-out',
      routerLink: 'cerrar-sesion'
    }
  ];
  public isLoggedIn: boolean =false;
  usuario!: Usuario;
  recetasFavoritas!: Receta[];
  recetaSeleccionada!: Receta;
  usuarioConPlan!: UsuarioConPlan;
  notificaciones!: Notificacion[];


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
      }
      )
      this.listaPerfil = this.listaPerfil.map(
        item => {
          item.routerLink = `/usuario/perfil/${item.routerLink}`
          return item;
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
  enviarNotificacion() {
    let time = DateTime.now().toISO(); // Obtiene la fecha actual en formato ISO-8601
    const nowTimestamp = DateTime.now().toJSDate(); // Obtiene la fecha actual como un objeto Date

let   notificacion: Notificacion = {
      usuario: this.usuario,
      mensaje: 'Mensaje de ejemplo',
      fechaHora: nowTimestamp,
      leida: false
    };
    console.log(notificacion)
    this._usuarioService.createNotificacion(notificacion)
    .subscribe( notificacion => {
      console.log(notificacion)
      window.location.reload();
    }
    )
  }
}

