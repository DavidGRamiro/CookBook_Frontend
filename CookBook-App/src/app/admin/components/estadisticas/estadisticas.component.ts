import { Component, OnInit } from '@angular/core';
import { Chart, ChartData } from 'chart.js';
import { Usuario } from 'src/app/auth/interface/auth.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

    usuariosRegistrados!: Usuario[];
    nombreUsuarios: any = [];
    idUsuario: any = []
    basicData:any;
    basicOptions: any;

    constructor( private _authService: AuthService){}

    //Recibimos todos los usuarios que tenemos registrados.
    obtenerUsuariosRegistrados(){
      this._authService.obtenerTodos().subscribe( response => {
          this.usuariosRegistrados = response;

          this.nombreUsuarios = response.map( usuario => usuario.username!);
          this.idUsuario = this.usuariosRegistrados.map(usuarios => usuarios.fechaRegistro!)

          //Extraer los nombres de los usuarios
            console.log(this.nombreUsuarios)
            console.log(this.idUsuario)
      })
    }

  ngOnInit(): void {

      //Cargamos las gráficas.
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.basicData = {
          labels: ['Ensalada de pollo', 'Salmón al horno', 'Arroz con pollo', 'Tarta de queso'],
          datasets: [
              {
                  label: 'Recetas más populares',
                  data: [60, 50, 80, 70, 100],
                  backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                  borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                  borderWidth: 1
              }
          ]
      };

      this.basicOptions = {
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              y: {
                  beginAtZero: true,
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              },
              x: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              }
          }
      };
  }

}


