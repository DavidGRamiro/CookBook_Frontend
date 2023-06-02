import { Component, OnInit } from '@angular/core';

//Interfaces
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { Receta } from 'src/app/recetas/interface/recetas.interface';
import { Usuario } from '../../interface/usuario.interface';
import { ValidatorService } from 'src/app/auth/services/validator.service';
import { UsuarioConPlan } from '../../interface/usuarioconplan.interface';
import { Notificacion } from '../../interface/notificacion.interface';
import { DialogService } from 'primeng/dynamicdialog';
import { EditarPerfilComponent } from '../../components/editar-perfil/editar-perfil.component';
import { NotificacionService } from '../../services/notificacion.service';
import { DragCalendarComponent } from 'src/app/shared/components/drag-calendar/drag-calendar.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  public isLoggedIn: boolean = false;
  usuario!: Usuario;
  recetasFavoritas!: Receta[];
  recetaSeleccionada!: Receta;
  usuarioConPlan!: UsuarioConPlan;
  notificaciones!: Notificacion[];
  notificacionesNuevas!: Notificacion[];
  activeIndex = 0;

  constructor(
    private _usuarioService: UsuarioService,
    private router: Router,
    private _validator: ValidatorService,
    private _dialogService: DialogService,
    private _notificacionService: NotificacionService,
    private _router: Router
  ) {}

  ngOnInit(): void {

    //Verificams si el usuario ha iniciado sesión
    this._validator.isLoggedIn$.subscribe((data) => {
      this.isLoggedIn = data;
    });

    this.isLoggedIn =
      localStorage.getItem('isLoggedIn') === 'true' ? true : false;
    console.log(this.isLoggedIn);
    if (this.isLoggedIn) {
      if (localStorage.getItem('user') != null) {
        const userString = localStorage.getItem('user');
        if (userString != null) {
          this.usuario = JSON.parse(userString);
        }
        console.log(this.usuario);
      }
      /// El usuario ha iniciado sesión, continuar con la lógica actual del componente
      this._usuarioService
        .getRecetasFavoritas(this.usuario.idUsuario)
        .subscribe((recetas) => {
          this.recetasFavoritas = recetas;
        });

      this._usuarioService
        .getPlandeUsuario(this.usuario.idUsuario)
        .subscribe((usuarioConPlan) => {
          this.usuarioConPlan = usuarioConPlan;
        });

      this._usuarioService
        .getNotificaciones(this.usuario.idUsuario)
        .subscribe((notificaciones) => {
          this.notificaciones = notificaciones;
          this.calcularnotificacionesNuevas(this.notificaciones);
        });

      this._notificacionService.notificacionLeida$.subscribe(() => {
        this.calcularnotificacionesNuevas(this.notificaciones);
      });
    } else {
      // si el usuario no ha iniciado sesion la pagina /user/perfil no es accesible, redirigir a /login
      this.router.navigate(['/login']);
    }
  }
  calcularnotificacionesNuevas(notificaciones: Notificacion[]) {
    this.notificacionesNuevas = notificaciones.filter(
      (notificacion) => notificacion.leida === false
    );
  }

  cambiarComponenteActivo(index: number) {
    console.log('Cambiando al componente', index);
    this.activeIndex = index;
  }

  editarPerfil() {
    //Abrimos un dialogo para editar el perfil
    console.log('Editar perfil');
    this._dialogService.open(EditarPerfilComponent, {
      header: 'Editar perfil ',
      width: '70% !important',
      contentStyle: { 'max-height': '500px', overflow: 'auto' },
      baseZIndex: 10000,
      data: {
        usuario: this.usuario,
      },
    }).onClose.subscribe(() => {
      window.location.reload();
    });
  }
}

