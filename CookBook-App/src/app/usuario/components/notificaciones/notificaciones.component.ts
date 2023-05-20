import { Component, Input, OnInit } from '@angular/core';
import { Notificacion } from '../../interface/notificacion.interface';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit{

    @Input() notificaciones!: Notificacion[];
    mostrarNotificaciones: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

    marcarNotificacionLeida(notificacion: Notificacion) {
      notificacion.leida = true;
    }
}
