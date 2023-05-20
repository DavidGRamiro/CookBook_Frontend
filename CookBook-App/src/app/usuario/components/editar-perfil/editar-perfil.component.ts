import { Component, Input } from '@angular/core';
import { Usuario } from '../../interface/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent {

  @Input() usuario!: Usuario;


  constructor(private _usuarioService: UsuarioService,
              private _messageService: MessageService) { }


  guardarCambios() {
    console.log('guardando cambios');
    this._usuarioService.updateUsuario(this.usuario).subscribe(
      (usuario: Usuario) => {
        console.log(usuario);
      }
    );
    this._messageService.add({severity:'success', summary:'Cambios guardados', detail:'Los cambios se han guardado correctamente'});
  }
}

