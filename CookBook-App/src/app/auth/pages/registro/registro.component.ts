import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CheckboxRequiredValidator, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../interface/auth.interface';
import { Router } from '@angular/router';
import { ValidatorService } from '../../services/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuarioRecibido! : Usuario;

  formRegistro = this._fb.group(
    {
      username: ['David', [Validators.required, Validators.pattern(this._validatorService.firstNameAndLastnamePattern) ]],
      email: ['', [Validators.required, Validators.pattern(this._validatorService.emailPattern)]],
      password: ['', [Validators.required]],
      password2: ['', [Validators.required]],
      terminos: [ ,[Validators.required]],
      privacidad: [ ,[Validators.required]]
    }
  )

  constructor(private _authService: AuthService,
              private _fb : FormBuilder,
              private _router: Router,
              private _validatorService: ValidatorService) { }

  ngOnInit(): void {
  }

  campoValido(campo : string){
    this._validatorService.campoValido(this.formRegistro, campo);
  }

  procesarRegistro(){

    this.formRegistro.markAllAsTouched();

    if(this.formRegistro.valid){
      this._authService.altaUsuario({
        username: this.formRegistro.value.username,
        email: this.formRegistro.value.email,
        password: this.formRegistro.value.password

      }).subscribe(response => {
        this.usuarioRecibido = response
        this._router.navigateByUrl("home")
        console.log(this.usuarioRecibido)
      })
    }
  }




}
