import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/auth/interface/auth.interface';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{

  usuarioLogueado : Usuario = {
    username: '',
    password: '',
    email: '',
    idUsuario: 0,
  };

  ngOnInit(): void {

    if(localStorage.getItem('user') != null){
      const userString = localStorage.getItem('user')
      if(userString != null){
        this.usuarioLogueado = JSON.parse(userString)
      }
    }
  }

  constructor(){}

}
