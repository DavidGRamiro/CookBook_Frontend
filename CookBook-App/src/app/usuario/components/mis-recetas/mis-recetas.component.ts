import { Component, Input, OnInit } from '@angular/core';
import { Receta } from 'src/app/recetas/interface/recetas.interface';
import { Usuario } from '../../interface/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { FormularioRecipeComponent } from 'src/app/shared/components/formulario-recipe/formulario-recipe.component';

@Component({
  selector: 'app-mis-recetas',
  templateUrl: './mis-recetas.component.html',
  styleUrls: ['./mis-recetas.component.css']
})
export class MisRecetasComponent implements OnInit{
  @Input() usuario!: Usuario;
  recetasCreadas!: Receta[];
  recetaSeleccionada!: Receta;

  constructor(private _usuarioService: UsuarioService,
              private _msgService: MessageService,
              private _dialogService: DialogService
    ) { }

  ngOnInit(): void {
    this._usuarioService.getRecetasByUsuario(this.usuario.idUsuario).subscribe(
      (recetas: Receta[]) => {
        this.recetasCreadas = recetas;
      }
    );
  }
  crearReceta() {
    this._dialogService.open(FormularioRecipeComponent, {
      header: 'Crear Receta',
      width: '800px',
      data: {
        usuario: this.usuario
      }
    });

  }
}
