import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../../interface/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';
import { Message, MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css'],
})
export class EditarPerfilComponent implements OnInit {
  usuario!: Usuario;
  mensaje!: Message[];
  showError: boolean = false;
  maxFileSize: number = 3000000;
  uploadedFile: any;
  uploadedImageUrl!: string;  // nueva variable para guardar la URL de la imagen subida

  constructor(
    private _config: DynamicDialogConfig,
    private _usuarioService: UsuarioService,
    private _messageService: MessageService,
    private _dialogRef: DynamicDialogRef
  ) {
    this.usuario = this._config.data.usuario;
  }
  ngOnInit(): void { }

  guardarCambios() {

    if (this.uploadedImageUrl) { // si se ha subido una imagen
      this.usuario.imagen = this.uploadedImageUrl.substring(31, this.uploadedImageUrl.length);
    }

    this._usuarioService
    .updatePerfil(this.usuario.idUsuario, this.usuario.email, this.usuario.username)
    .subscribe({
      next: (usuario: Usuario) => {
        this.usuario = usuario;
        localStorage.setItem('user', JSON.stringify(usuario));
        this._messageService.add({
          severity: 'success',
          summary: 'Cambios guardados',
          detail: 'Los cambios se han guardados correctamente',
        });
        this._dialogRef.close();
      },
      error: (error: any) => {
        console.error(error);
      },
    });

  }
  // Esta función crea el nuevo nombre de archivo basado en el nombre de usuario y la extensión del archivo
  createNewFileName(username: string, oldFileName: string): string {
    const fileExtension = oldFileName.split('.').pop();
    username = username.replace(/\s/g, '-');
    username = username.toLowerCase();
    let newFileName = `${username}.${fileExtension}`;
    return newFileName;
  }

  upload(event: any) {
    if (event.files.length > 0) {
      this.uploadedFile = event.files[0];
      let nuevoNombre = this.createNewFileName( this.usuario.username, event.files[0].name);
      let newFile = new File([event.files[0]], nuevoNombre, {type: event.files[0].type});

      this._usuarioService
        .saveImagePerfil( this.usuario.idUsuario, newFile)
        .subscribe((usuario: Usuario) => {
          this.uploadedImageUrl = usuario.imagen; // guardamos la URL de la imagen subida
          this.usuario = usuario;
          localStorage.setItem('user', JSON.stringify(usuario));
          this._messageService.add({
            severity: 'success',
            summary: 'Imagen de perfil actualizada',
            detail: 'La imagen de perfil se ha cargado correctamente',
          });
        });


    }
  }
}
