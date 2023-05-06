import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

import { CategoriasService } from 'src/app/categorias/services/categorias.service';

import { Ingrediente, RecetasConIngrediente, Receta } from 'src/app/shared/interfaces/share.interface';
import { Categoria, Usuario } from 'src/app/recetas/interface/recetas.interface';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecetasService } from 'src/app/recetas/services/recetas.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { subscribeOn } from 'rxjs';


@Component({
  selector: 'app-fomulario-receta',
  templateUrl: './fomulario-receta.component.html',
  styleUrls: ['./fomulario-receta.component.css']
})
export class FomularioRecetaComponent {

}
