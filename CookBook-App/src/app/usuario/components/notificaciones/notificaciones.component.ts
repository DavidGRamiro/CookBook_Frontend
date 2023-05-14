import { Component, Input, OnInit } from '@angular/core';
import { Notificacion } from '../../interface/notificacion.interface';
import { UsuarioService } from '../../services/usuario.service';
import { DateTime } from 'luxon';

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
    }

    calcularTiempoTranscurrido(fecha: Date) {
      const ahora = DateTime.local();
      const fechaHora = DateTime.fromJSDate(fecha);
      const diferencia = ahora.diff(fechaHora, ['minutes']).minutes;
      const horas = Math.floor(diferencia / 60);

      if (fechaHora > ahora) {
        return 'Fecha en el futuro';
      } else if (diferencia < 60) {
        return `Hace ${diferencia} minutos`;
      } else if (horas < 24) {
        return `Hace ${horas} horas`;
      } else {
        return fechaHora.toLocaleString(DateTime.DATE_FULL);
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
