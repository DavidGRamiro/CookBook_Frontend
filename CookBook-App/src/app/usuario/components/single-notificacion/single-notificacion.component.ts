import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Notificacion } from '../../interface/notificacion.interface';
import { DateTime, Interval } from 'luxon';
import { UsuarioService } from '../../services/usuario.service';
import { NotificacionDTO } from '../../interface/notificaciondto.interface';
import { NotificacionService } from '../../services/notificacion.service';

@Component({
  selector: 'app-single-notificacion',
  templateUrl: './single-notificacion.component.html',
  styleUrls: ['./single-notificacion.component.css']
})
export class SingleNotificacionComponent implements OnInit, OnDestroy{

    @Input() notificacion!: Notificacion;
    @Input() notificaciones!: Notificacion[];
    notificacionDTO!: NotificacionDTO;
    mostrarDetalles = false;
    private timer: any; // Variable para almacenar el temporizador

    ngOnInit(): void {
      // Iniciar el temporizador cuando el componente se inicializa
      this.iniciarTemporizador();
    }

    ngOnDestroy(): void {
      // Detener el temporizador cuando el componente se destruye
      this.detenerTemporizador();
    }
    iniciarTemporizador(): void {
      // Iniciar el temporizador para actualizar el tiempo transcurrido cada segundo
      this.timer = setInterval(() => {
        // Llamar a la función calcularTiempoTranscurrido() para actualizar el tiempo transcurrido
        this.calcularTiempoTranscurrido(this.notificacion.fechaHora);
      }, 1000);
    }

    detenerTemporizador(): void {
      // Detener el temporizador
      clearInterval(this.timer);
    }

    constructor(private _usuarioService: UsuarioService, private _notificacionService: NotificacionService) { }

   /**
    * @description Función que calcula el tiempo transcurrido desde que se creó la notificación
    * @param fechaHora Fecha y hora de creación de la notificación
    * @returns Tiempo transcurrido desde que se creó la notificación
    * @example es una notificación de hace 2 horas
    */
   calcularTiempoTranscurrido(fechaHora: Date): string {
    const fechaHoraNotificacion = DateTime.fromISO(fechaHora.toString());
    const fechaHoraActual = DateTime.now();
    const duracion = fechaHoraActual.diff(fechaHoraNotificacion, ['hours', 'minutes', 'seconds']).shiftTo('hours', 'minutes', 'seconds');

    let tiempoTranscurridoString = '';

    if (duracion.as('seconds') < 60) {
      tiempoTranscurridoString += duracion.as('seconds').toFixed(0) + ' segundo' + (duracion.as('seconds') !== 1 ? 's' : '');
    } else if (duracion.as('minutes') < 60) {
      tiempoTranscurridoString += duracion.as('minutes').toFixed(0) + ' minuto' + (duracion.as('minutes') !== 1 ? 's' : '');
    } else if (duracion.as('hours') < 24) {
      tiempoTranscurridoString += duracion.as('hours').toFixed(0) + ' hora' + (duracion.as('hours') !== 1 ? 's' : '');
    } else {
      tiempoTranscurridoString += duracion.as('days').toFixed(0) + ' día' + (duracion.as('days') !== 1 ? 's' : '');
    }

    return tiempoTranscurridoString.trim();
  }

  toggleNotificacion(): void {
    this.mostrarDetalles = !this.mostrarDetalles;
    // Aquí también puedes realizar la lógica para marcar la notificación como leída en el backend
    if (!this.notificacion.leida) {
      // Realizar la llamada al servicio para marcar la notificación como leída
      this.marcarNotificacionLeida();
      // Actualizar el estado de la notificación en el componente padre
      this.notificacion.leida = true;

      this._notificacionService.notificacionLeida();
    }
  }

  private marcarNotificacionLeida(): void {
    // comprobamos que la notificacion tenga id
    if (this.notificacion.idNotificacion) {
      this._usuarioService.getNotificacionById(this.notificacion.idNotificacion)
      .subscribe((notificacion: NotificacionDTO) => {
        this.notificacionDTO = notificacion;
        this.notificacionDTO.leida = !this.notificacionDTO.leida;
        this.actualizarNotificacion();
      });

}
  }
  private actualizarNotificacion(): void {

    this._usuarioService.updateNotificacion(this.notificacionDTO)
      .subscribe((notificacion: NotificacionDTO) => {
        console.log('Notificacion actualizada', notificacion);
      }
    );
  }

  eliminarNotificacion(): void {
    // comprobamos que la notificacion tenga id
    if (this.notificacion.idNotificacion) {
      this._usuarioService.deleteNotificacion(this.notificacion.idNotificacion)
        .subscribe((response: boolean) => {
          // Eliminar la notificación de la lista actual sin recargar la página
          const index = this.notificaciones.findIndex(n => n.idNotificacion === this.notificacion.idNotificacion);
          if (index !== -1) {
            this.notificaciones.splice(index, 1);
          }
        });
    }
  }

}

