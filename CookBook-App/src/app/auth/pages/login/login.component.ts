import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../interface/auth.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorService } from '../../services/validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn : boolean = false;
  login! : boolean;
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

  ngOnInit(): void {}

  //Método de validación de campos cumplementados.
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
                //Variable para mostrar el mensaje de error en el los inputs de login
                this.login = true;
                // Variable asociada al servicio de validaciones para saber si se ha logueado
                this.isLoggedIn = true;
                this._validator.setLoggedIn(this.isLoggedIn)
                // Almacenamos la variable en el localStorage, para que si se recarga el navegador siga conectado
                // Tambien almacenamos el objeto usuario para poder acceder a sus datos en cualquier momento
                localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn));
                localStorage.setItem('user', JSON.stringify(this.usuarioRecibido))
                // Navegamos a la pagina principal si el loggin es correcto.
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
