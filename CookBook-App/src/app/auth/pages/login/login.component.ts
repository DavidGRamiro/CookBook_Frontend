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

  loading: boolean = false;

  //La respuesta de nuestras peticiones la almacenamos en este objeto.
  usuarioRecibido! : Usuario;

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
                this._router.navigateByUrl("/home")
                return true;
          })
    }
  }

  navegarRegistro(){
    this._router.navigateByUrl("auth/registro")
  }

  //Funcion asociada al botón submit que muestra una animación tipo spinner
  load(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }

}







