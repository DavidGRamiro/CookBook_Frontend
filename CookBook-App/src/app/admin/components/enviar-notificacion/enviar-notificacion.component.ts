import { Component, OnInit, Inject, Input } from '@angular/core';
import { Usuario } from 'src/app/usuario/interface/usuario.interface';
import { DateTime } from 'luxon';
import { UsuarioService } from 'src/app/usuario/services/usuario.service';
import { Notificacion } from 'src/app/usuario/interface/notificacion.interface';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-enviar-notificacion',
  templateUrl: './enviar-notificacion.component.html',
  styleUrls: ['./enviar-notificacion.component.css']
})

export class EnviarNotificacionComponent implements OnInit {
  @Input() idUsuario: number = 0;
  usuario!: Usuario;

  notificacion: Notificacion = {
    usuario: this.usuario,
    mensaje: '',
    fechaHora: DateTime.now().toJSDate(),
    leida: false,
  };
  mensajeControl: FormControl;

  constructor(private _usuarioService: UsuarioService,
              public _config: DynamicDialogConfig,
              private _msg : MessageService)
              { this.idUsuario = this._config.data.idUsuario;
                this.mensajeControl = new FormControl('', [Validators.required, Validators.maxLength(250)]);
              }

  ngOnInit(): void {
    const idUsuario = this.idUsuario;
    console.log(idUsuario);

    this.loadUsuario(idUsuario);
  }

  loadUsuario(idUsuario: number) {
    this._usuarioService.getUserById(idUsuario).subscribe((usuario: Usuario) => {
      this.usuario = usuario;
      this.notificacion.usuario = usuario;
    });
  }

  enviarNotificacion() {
    const nowTimestamp = DateTime.now().toJSDate();

    this.notificacion.fechaHora = nowTimestamp;

    console.log(this.notificacion);
    this._usuarioService.createNotificacion(this.notificacion).subscribe((notificacion) => {

      //Limpia el formulario
      this.notificacion.mensaje = '';
      this._msg.add({severity:'success', summary:'Notificación enviada', detail: 'La notificación se ha enviado'})
      setTimeout(()=> {

      }
      , 1500)
    }, error => {
      this._msg.add({ severity:'warning', summary:'Notificación no enviada', detail: 'La notificación no ha podido ser enviada' })

    });
  }
}
