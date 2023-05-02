import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../interface/auth.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ValidatorService } from '../../services/validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login! : boolean;
  loading: boolean = false;
  //La respuesta de nuestras peticiones la almacenamos en este objeto.
  usuarioRecibido! : Usuario;
  password!: string;

  //Formulario reactivo
  formLogin : FormGroup = this._fb.group(
    {
      email: ['', [Validators.required, Validators.pattern(this._validator.emailPattern)]],
      password: ['',[Validators.required]]
    }
  );

  constructor(private _authService: AuthService,
              private _fb : FormBuilder,
              private _router: Router,
              private _validator: ValidatorService) { }

  ngOnInit(): void {
  }

  validarCampo( campo: string ) {
    return this._validator.campoValido(this.formLogin, campo)
  }


  //Validacion del usuario introducido con los que tenemos en BBDD
  validarUsuario(){

    this.formLogin.markAllAsTouched();

    if(this.formLogin.valid){
      this._authService.obtenerUno({
        email: this.formLogin.value.email,
        password: this.formLogin.value.password
        }).subscribe( res =>{
                this.usuarioRecibido = res;
                this.login = true;
                this._router.navigateByUrl("/home")
          },
          err => {
            this.login = false;
            console.log("Error de validacion")
          })
    }
  }


  //Navegacion al componente de registro
  navegarRegistro(){
    this._router.navigateByUrl("auth/registro")
  }

}
