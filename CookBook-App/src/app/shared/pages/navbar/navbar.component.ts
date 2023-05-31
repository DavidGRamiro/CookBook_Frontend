import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
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
  isAdmin: boolean = false;
  items!: MenuItem[];
  registerItems!: MenuItem[];
  displayMenu: boolean = false;

  ngOnInit(): void {
  }

  constructor(private _validator: ValidatorService,
              private _msg : MessageService,
              private _confirmationService : ConfirmationService,
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
      
      if(this.usuarioLogueado.usuarioConRoles?.find(r => r.role.nombreRol == 'admin')){
        this.isAdmin = true;
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
      label: 'Planes', routerLink: '/planes/todos'
    },
    {
      label: 'Acerca de',
      items: [
        { label: 'Quiénes somos', routerLink: '/about' },
        { label: 'FAQs', routerLink: '/about/faqs' },
        { label: 'Contacto', routerLink: '/about/contacto' }
      ]
    }
  ]
  public registerMenuItems: MenuItem[] = [
    {
      label: 'Inicia sesión', routerLink: '/auth/login', icon: "pi pi-user"
    },
    {
      label: 'Registrate', routerLink: '/auth/registro', icon: "pi pi-plus"
    }
  ]
    public showMobileMenu(){
      this.displayMenu = !this.displayMenu;
    }
  navegarPerfil(): void {
    if (this.isLoggedIn) {
      this._router.navigateByUrl('/user/perfil');
    } else {
      this._router.navigateByUrl('/login');
    }
  }
  public confirmarCierre() {
    console.log('Modal abierto');
      this._confirmationService.confirm({
        message: '¿Seguro que quiere cerrar sesión?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this._msg.add({ severity: 'success', summary: 'Cerrando sesión', detail: 'Has cerrado sesión' });
          this.cerrarSesion();
        },
        reject: () => {
          this._msg.add({ severity: 'info', summary: 'Cancelado', detail: 'Has cancelado el cierre de sesión' });
        }
      });
  }

  private cerrarSesion() {
    localStorage.clear();
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    localStorage.removeItem('rol');
    localStorage.removeItem('token');
    console.log('Sesión cerrada');
    if (window.location.pathname === '/user/perfil') {
      this._router.navigateByUrl('/home');
    }else{
    window.location.reload();
    }
  }
}


