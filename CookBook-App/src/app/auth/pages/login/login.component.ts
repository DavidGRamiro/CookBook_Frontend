import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Los constructores tendrán servicios inyectados, para poder usarlos en el componente, y llamar al método que necesitemos.
  // Por ejemplo, en este caso, inyectamos el servicio de autenticación, para poder llamar al método de login.
  // PJ: constructor( private _authService: AuthService){}
  // Luego, definiremos nuestros métodos propios dentro de cada componente, y dentro de ellos, llamaremos a los métodos de los servicios.

  // PJ: hacerLogin(){
  //   this._authService.login();}

  constructor() { }

  ngOnInit(): void {
  }
}
