import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Usuario } from 'src/app/auth/interface/auth.interface';
import { UsuarioService } from 'src/app/usuario/services/usuario.service';
import { DialogService } from 'primeng/dynamicdialog';
import { EnviarNotificacionComponent } from '../enviar-notificacion/enviar-notificacion.component';

@Component({
  selector: 'app-usuarios-admin',
  templateUrl: './usuarios-admin.component.html',
  styleUrls: ['./usuarios-admin.component.css']
})
export class UsuariosAdminComponent implements OnInit{

  listaUsuarios: Usuario[] = [];
  usuarioLogueado!: Usuario;
  usuarioBuscado! : Usuario;

  constructor(private _usuarioService: UsuarioService,
              private _msg : MessageService,
              private _dialogService : DialogService) { }

  ngOnInit(): void {
    this.obtenerTodos()

    let user = localStorage.getItem('user')!;
    this.usuarioLogueado = JSON.parse(user);
    const userJSON = JSON.parse(user!);
    this.usuarioLogueado.imagen = userJSON.imagen;
  }

  //Recupera todos los usuarios para pintarlos en la tabla
  obtenerTodos(){
  this._usuarioService.getTodosUsuarios().subscribe( response => {
    this.listaUsuarios = response;
    })
  }

  //Eliminamos un usuario
  eliminarUsuario(idUsuario: number){
    //Primero se eliminan los comentarios de los usuarios, si todo va bien, se elimina el usuario.
    this._usuarioService.deleteComentariosUsuarios(idUsuario).subscribe( response => {
    this._usuarioService.deleteUsuario(idUsuario).subscribe( response => {
        this._msg.add({severity:'success', summary:'Usuario eliminado', detail:'El usuario ha sido eliminado correctamente'});
        this.obtenerTodos();
    }, error => {
      console.error(error);
    })
    }, error => {
      console.error(error);
    }
    )
  }

  //Modal al hacer click en enviar, que redirige a un componente de usuario.
  mandarNotificacion(idUsuario: number) {
    let usuario = this.listaUsuarios.find(usuario => usuario.idUsuario === idUsuario);
    this._dialogService.open(EnviarNotificacionComponent, {
      header: 'Enviar notificación a ' + usuario?.username,
      width: '70%',
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      baseZIndex: 10000,
      data: {
        idUsuario: idUsuario
      }
    });
  }
}

