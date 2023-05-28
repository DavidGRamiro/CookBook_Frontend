import { Component, Input, OnInit } from '@angular/core';
import { Receta } from 'src/app/recetas/interface/recetas.interface';
import { Usuario } from '../../interface/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-mis-recetas',
  templateUrl: './mis-recetas.component.html',
  styleUrls: ['./mis-recetas.component.css']
})
export class MisRecetasComponent implements OnInit{
  @Input() usuario!: Usuario;
  recetasCreadas!: Receta[];
  recetaSeleccionada!: Receta;

  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this._usuarioService.getRecetasByUsuario(this.usuario.idUsuario).subscribe(
      (recetas: Receta[]) => {
        this.recetasCreadas = recetas;
      }
    );
  }
}
