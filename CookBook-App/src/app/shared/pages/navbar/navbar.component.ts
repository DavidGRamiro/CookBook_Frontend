import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { Usuario } from 'src/app/auth/interface/auth.interface';
import { ValidatorService } from 'src/app/auth/services/validator.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  public isLoggedIn: boolean =false;
  public usuarioLogueado : Usuario = {
    username: '',
    password: '',
    email: '',
    idUsuario: 0,
    imagen: '',
  }

  items!: MenuItem[];

  ngOnInit(): void {
  }

  constructor(private _validator: ValidatorService,
              private _msg : MessageService,
              private _router: Router) {

    this._validator.isLoggedIn$.subscribe( data => {
      this.isLoggedIn = data
    })

    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true' ? true : false;

    if(localStorage.getItem('user') != null){
      const userString = localStorage.getItem('user');
      if(userString != null){
        this.usuarioLogueado = JSON.parse(userString)
      }


    }
  }

  public menuItems: MenuItem[] = [
    {
      label: 'Recetas',
      items: [
        { label: 'Categorias', routerLink: '/categorias/todas' },
        { label: 'Todas las recetas', routerLink: '/recetas/todas' },
      ]
    },
    {
      label: 'Planes',
      items: [
        { label: 'Todos los planes', routerLink: '/planes/todos'}
      ]
    },
    {
      label: 'Acerca de',
      items: [
        { label: 'Quiénes somos', routerLink: '/about' },
        { label: 'FAQs', routerLink: '/about/faqs' },
        { label: 'Contacto', routerLink: '/about/contacto' }
      ]
    },
    {
      label: 'Perfil',
      items: [
        { label: 'Mi perfil', routerLink: '/user' },
        { label: 'Notificaciones', routerLink: '/user/notificaciones' }
      ]
    },
    {
      label: 'Subir receta' , routerLink: '/alta'
    }
  ]

  navegarPerfil(): void {
    if (this.isLoggedIn) {
      this._router.navigateByUrl('/user/perfil');
    } else {
      this._router.navigateByUrl('/login');
    }
  }

  cerrarSesion(){
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    this._router.navigateByUrl("/home")
  }

  // FIXME: No funciona el mensaje que quiero mostrar para la confirmación de cerrar sesión.
  showMensaje() {
    this._msg.add({ severity: 'info', summary: 'Cerrar sesión', detail: '¿Estás seguro de que quieres cerrar sesión?', sticky: true });
  }

}
