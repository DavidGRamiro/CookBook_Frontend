import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';
import { Usuario } from 'src/app/auth/interface/auth.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

    basicData: any;
    basicOptions: any;
    usuariosRegistrados!: Usuario[];
    nombreUsuarios: any = [];
    idUsuario: any = []

    constructor( private _authService: AuthService){}

    obtenerUsuariosRegistrados(){
      this._authService.obtenerTodos().subscribe( response => {
          this.usuariosRegistrados = response;
          this.nombreUsuarios = Object.values(response)
          this.idUsuario = Object.keys(response)

            //Extraer los nombres de los usuarios
            // this.nombreUsuarios = response. .map( usuario => usuario.username!);
            console.log(this.nombreUsuarios)
            console.log(this.idUsuario)
            this.basicData.labels = this.nombreUsuarios;
      })
    }

    ngOnInit(): void {
    this.obtenerUsuariosRegistrados()

  }
  //TODO: Hacer graficas.

}

