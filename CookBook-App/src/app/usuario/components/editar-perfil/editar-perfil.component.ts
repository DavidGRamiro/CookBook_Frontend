import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../../interface/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';
import { Message, MessageService } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Router } from '@angular/router';

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
  maxFileSize: number = 3000000;

  constructor(
    private _config: DynamicDialogConfig,
    private _usuarioService: UsuarioService,
    private _messageService: MessageService,
    private _router: Router
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
    console.log(this.usuario.imagen)
    this.usuario.imagen = this.usuario.imagen.substring(31, this.usuario.imagen.length);
    console.log(this.usuario.imagen);
    this._usuarioService
      .updateUsuario(this.usuario)
      .subscribe((usuario: Usuario) => {
        console.log(usuario);
        this.usuario = usuario;
      });
    this._messageService.add({
      severity: 'success',
      summary: 'Cambios guardados',
      detail: 'Los cambios se han guardado correctamente',
    });

  }
  // Esta función crea el nuevo nombre de archivo basado en el nombre de usuario y la extensión del archivo
  createNewFileName(username: string, oldFileName: string): string {
    const fileExtension = oldFileName.split('.').pop();
    username = username.replace(/\s/g, '-');
    username = username.toLowerCase();
    let newFileName = `${username}.${fileExtension}`;
    console.log(newFileName);
    return newFileName;
  }

  upload(event: any) {
    console.log('upload');
    console.log(event.files);
    if (event.files.length > 0) {
      console.log(event.files[0].name);
      let nuevoNombre = this.createNewFileName( this.usuario.username, event.files[0].name);
      let newFile = new File([event.files[0]], nuevoNombre, {type: event.files[0].type});
      console.log(newFile);

      this._usuarioService
        .saveImagePerfil( this.usuario.idUsuario, newFile)
        .subscribe((usuario: Usuario) => {
          console.log(usuario);
          this.usuario = usuario;
        }

      );
    }
  }
}
