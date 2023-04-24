import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../interface/auth.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuarioRecibido! : Usuario;

  formRegistro = this._fb.group(
    {
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    }
  )

  constructor( private _authService: AuthService,
              private _fb : FormBuilder,
              private _router: Router) { }

  ngOnInit(): void {
  }

  procesarRegistro(){

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
