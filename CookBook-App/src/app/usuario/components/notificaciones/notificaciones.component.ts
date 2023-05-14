import { Component, Input, OnInit } from '@angular/core';
import { Notificacion } from '../../interface/notificacion.interface';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit{

    @Input() notificaciones!: Notificacion[];
    mostrarNotificaciones: boolean = false;

    constructor(private _usuarioService: UsuarioService) { }

    ngOnInit(): void {
      console.log(this.notificaciones);
    }
    calcularTiempoTranscurrido(fecha: Date): string {
      const ahora = new Date();
      const fechaHora = new Date(fecha);
      const diferencia = ahora.getTime() - fechaHora.getTime();
      const minutos = Math.floor(diferencia / 60000); // Calcula los minutos transcurridos
      const horas = Math.floor(minutos / 60); // Calcula las horas transcurridas
      if (minutos < 60) {
        return `Hace ${minutos} minutos`;
      } else if (horas < 24) {
        return `Hace ${horas} horas`;
      } else {
        return fechaHora.toLocaleDateString(); // Si han pasado más de 24 horas, muestra la fecha completa
      }
    }

    toggleNotificaciones() {
      const notificaciones = document.getElementById('notificaciones');
      if (notificaciones) {
        if (notificaciones.style.display === 'none') {
          notificaciones.style.display = 'block';
        } else {
          notificaciones.style.display = 'none';
        }
      }
    }
    marcarNotificacionLeida(notificacion: Notificacion) {
      notificacion.leida = true;
    }
}
