import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../../interface/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';
import { Message, MessageService } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css'],
})
export class EditarPerfilComponent implements OnInit {
  usuario!: Usuario;
  repeatPassword!: string;
  mensaje!: Message[];
  showError: boolean = false;

  constructor(
    private _config: DynamicDialogConfig,
    private _usuarioService: UsuarioService,
    private _messageService: MessageService
  ) {
    this.usuario = this._config.data.usuario;
  }
  ngOnInit(): void {
    this.mensaje = [
      {
        severity: 'error',
        summary: 'Error',
        detail: 'Las contraseñas no coinciden',
      },
    ];
  }

  guardarCambios() {
    console.log('guardando cambios');
    // Validación de la contraseña
    if (this.usuario.password !== this.repeatPassword) {
      // Las contraseñas no coinciden, muestra un mensaje de error
      this.showError = true;
      return;
    }
    this._usuarioService
      .updateUsuario(this.usuario)
      .subscribe((usuario: Usuario) => {
        console.log(usuario);
      });
    this._messageService.add({
      severity: 'success',
      summary: 'Cambios guardados',
      detail: 'Los cambios se han guardado correctamente',
    });
  }
}
