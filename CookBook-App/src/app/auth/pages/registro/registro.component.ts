import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../interface/auth.interface';
import { Router } from '@angular/router';
import { ValidatorService } from '../../services/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class RegistroComponent implements OnInit {

  usuarioRecibido! : Usuario;
  registroInvalido: boolean = false;
  passwordCoinciden!: boolean;
  emailForm!: string;
  emailUtilizado! : boolean;

  formRegistro = this._fb.group(
    {
      username: ['', [Validators.required, Validators.pattern(this._validatorService.firstNameAndLastnamePattern)]],
      email: ['', [Validators.required, Validators.pattern(this._validatorService.emailPattern)]],
      password: ['', [Validators.required], Validators.minLength(8)],
      password2: ['', [Validators.required]],
      terminos: [ true,[Validators.required]],
      privacidad: [true,[Validators.required]]
    }
  )

  constructor(private _authService: AuthService,
              private _fb : FormBuilder,
              private _router: Router,
              private _validatorService: ValidatorService) { }

  ngOnInit(): void {

  }

  campoValido(campo : string){
    let campoSinEspacio = campo.trim()
    return this._validatorService.campoValido(this.formRegistro, campoSinEspacio);
  }

  verificarEmailRepetido(){
    if(this.formRegistro.controls['email'].value != null){
      this.emailForm = this.formRegistro.controls['email'].value
      this._authService.buscarEmail(this.emailForm).subscribe(response => {

        return response == null ? this.emailUtilizado = false : this.emailUtilizado = true
      })

    }
  }

  verficarPasswords(){
  return this.formRegistro.controls['password'].value === this.formRegistro.controls['password2'].value
        ? this.passwordCoinciden = true
        : this.passwordCoinciden = false;
  }

  procesarRegistro(){
    this.formRegistro.markAllAsTouched();
    this.verficarPasswords();

    if(this.formRegistro.valid){
      this._authService.altaUsuario({
        username: this.formRegistro.value.username,
        email: this.formRegistro.value.email,
        password: this.formRegistro.value.password
      }).subscribe(response => {
        if(this.passwordCoinciden=== true){
          this.usuarioRecibido = response
          this._router.navigateByUrl("home")
        }
      },
      error => {
        console.log("Error de registro");
      })
    }
  }




}
