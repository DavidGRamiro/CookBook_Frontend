import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../interface/auth.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logueado: boolean = false;
  loading: boolean = false;

  //La respuesta de nuestras peticiones la almacenamos en este objeto.
  usuarioRecibido! : Usuario;

  //Formulario reactivo
  formLogin : FormGroup = this._fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    }
  );

  constructor(private _authService: AuthService,
              private _fb : FormBuilder,
              private _router: Router) { }

  ngOnInit(): void {
  }

  //Validacion del usuario introducido con los que tenemos en BBDD
  validarUsuario(){
    if(this.formLogin.valid){
      this._authService.obtenerUno({
        email: this.formLogin.value.email,
        password: this.formLogin.value.password
        }).subscribe( res =>{
                this.usuarioRecibido = res;
                this.logueado = true;
                this._router.navigateByUrl("/home")
          })
    }
  }

  //Navegacion al componente de registro
  navegarRegistro(){
    this._router.navigateByUrl("auth/registro")
  }

}
