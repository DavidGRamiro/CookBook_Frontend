import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Usuario } from 'src/app/auth/interface/auth.interface';
import { UsuarioService } from 'src/app/usuario/services/usuario.service';
import { DialogService } from 'primeng/dynamicdialog';
import { PerfilComponent } from 'src/app/usuario/pages/perfil/perfil.component';

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
  }

  //Recupera todos los usuarios para pintarlos en la tabla
  obtenerTodos(){
  this._usuarioService.getTodosUsuarios().subscribe( response => {
    this.listaUsuarios = response;
    })
  }

  //Eliminamos un usuario
  eliminarUsuario(idUsuario: number){
    //Primero se eliminan los comentarios de los usuarios
    this._usuarioService.deleteComentariosUsuarios(idUsuario).subscribe( response => {
      //Despues se procede a eliminar el usuario en cuestión
      this._usuarioService.deleteUsuario(idUsuario).subscribe( response => {
        this._msg.add({severity:'success', summary:'Usuario eliminado', detail: 'El usuario se ha eliminado'})
        setTimeout(()=> {
          window.location.reload();
        }, 1500)
      }, error => {
        this._msg.add({ severity:'warning', summary:'Usuario no eliminado', detail: 'El usuario no ha podido ser eliminado' })
      });
    })
  }

  //Modal al hacer click en enviar, que redirige a un componente de usuario.
  mandarNotificacion(){
    this._dialogService.open( PerfilComponent, {
      header: 'Enviar notificación a usuario' ,
      width: '50%',
    })
  }

}

