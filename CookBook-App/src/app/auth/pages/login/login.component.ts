import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../interface/auth.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorService } from '../../services/validator.service';
import { FireBaseAuth } from '../../interface/firebase.interface';
import { UsuarioService } from 'src/app/usuario/services/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn : boolean = false;
  login! : boolean;
  usuarioRecibido! : Usuario | null;
  password!: string;
  rol: string = '';
  token: string = '';
  userFirebase: FireBaseAuth = {} as FireBaseAuth;
  usuarioGoogle : Usuario = {} as Usuario;
  error: string = '';

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
              private _validator: ValidatorService,
              private _userService : UsuarioService) { }

  ngOnInit(): void {}

  //Método de validación de campos cumplementados.
  validarCampo( campo: string ) {
    return this._validator.campoValido(this.formLogin, campo)
  }

  //Validacion del usuario introducido con los que tenemos en BBDD
  validarUsuario(){
    this.formLogin.markAllAsTouched();

    if(this.formLogin.valid){
      this._authService.login({
        email: this.formLogin.value.email,
        password: this.formLogin.value.password
        }).subscribe( res =>{
                this.usuarioRecibido = res.body ;
                this.token = res.headers.get("Authorization") || '';
                localStorage.setItem('token', this.token);
                this.rol = this.usuarioRecibido?.usuarioConRoles?.[0].role.nombreRol || '';
                localStorage.setItem('rol', this.rol);
                //Variable para mostrar el mensaje de error en los inputs de login
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
            this.error = err.error;
            console.error(err.error)
          })
    }
  }

  //Hacer login con el servicio de Google
  signGoogle(){
    // Llamamos al servicio que nos facilita Firebase
    this._authService.loginByGoogle().then(response => {

      let nombreUsuario = response.user?.displayName;
      let emailUsuario = response.user.email
      let passwordUsuario = response.user?.uid;
      let imagenUsuario = response.user.photoURL

      //Comprobamos si el usuario que entra por google ya existe en nuestra BBDD
      this._authService.buscarEmail(emailUsuario!).subscribe(res => {

        if(res === null){
          //Damos de alta al usuario en nuestra BBDD
          this.usuarioGoogle.email = emailUsuario;
          this.usuarioGoogle.username = nombreUsuario;
          this.usuarioGoogle.password = passwordUsuario;
          this.usuarioGoogle.imagen = imagenUsuario

          this._authService.altaUsuario(this.usuarioGoogle).subscribe(response => {

            let idUsuarioNuevo: number | undefined = response.idUsuario;

            if (typeof idUsuarioNuevo === 'number') {

              if(this.usuarioGoogle.imagen != undefined){
                const data = { idUsuario: idUsuarioNuevo, imagen: this.usuarioGoogle.imagen }
                this._authService.setImagenGoogle(data.idUsuario, data.imagen).subscribe(res => {
                });
            }
            }
            // Variable asociada al servicio de validaciones para saber si se ha logueado
            this.isLoggedIn = true;
            this._validator.setLoggedIn(this.isLoggedIn)
            // Almacenamos la variable en el localStorage, para que si se recarga el navegador siga conectado
            // Tambien almacenamos el objeto usuario para poder acceder a sus datos en cualquier momento
            localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn));
            localStorage.setItem('user', JSON.stringify(this.usuarioGoogle))
            // Navegamos a la pagina principal si el loggin es correcto.
            this._router.navigateByUrl("/home")
          })
        }
        else{
          // Variables asociada al servicio de validaciones para saber si se ha logueado)
          this.usuarioGoogle.email = res.email
          this.usuarioGoogle.password = res.password
          this.usuarioGoogle.username = res.username
          this.usuarioGoogle.idUsuario = res.idUsuario
          this.usuarioGoogle.imagen = response.user.photoURL

          let idUsuarioExistente: number | undefined = this.usuarioGoogle.idUsuario;

            if ( idUsuarioExistente != undefined) {
              if(this.usuarioGoogle.imagen != undefined){
                const imagen = this.usuarioGoogle.imagen
                const data = { idUsuario: idUsuarioExistente, imagen: imagen }
                this._authService.setImagenGoogle( data.idUsuario, data.imagen ).subscribe(res => {
                });
              }
            }
          this.isLoggedIn = true;
          this._validator.setLoggedIn(this.isLoggedIn)
          // Almacenamos la variable en el localStorage, para que si se recarga el navegador siga conectado
          // Tambien almacenamos el objeto usuario para poder acceder a sus datos en cualquier momento
          localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn));
          localStorage.setItem('user', JSON.stringify(this.usuarioGoogle))
          // Navegamos a la pagina principal si el loggin es correcto.
          this._router.navigateByUrl("/home")
        }
      })
    })
  }

  signFacebook(){
    this._authService.loginByFacebook().then(response => {
    })
  }


  //Navegacion al componente de registro
  navegarRegistro(){
    this._router.navigateByUrl("auth/registro")
  }

}
