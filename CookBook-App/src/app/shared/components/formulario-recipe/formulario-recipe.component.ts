import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Receta } from 'src/app/categorias/interfaces/categorias.interface';
import { Ingrediente, RecetasConIngrediente } from 'src/app/shared/interfaces/share.interface';
import { RecetasService } from 'src/app/recetas/services/recetas.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-fomulario-recipe',
  templateUrl: './formulario-recipe.component.html',
  styleUrls: ['./formulario-recipe.component.css']
})
export class FormularioRecipeComponent implements OnInit{

  recetas!: Receta[];
  recetaSeleccionada!: Receta;
  ingredientes!: Ingrediente[];
  ingredienteSeleccionado: Ingrediente | undefined;
  cantidadIngrediente: number = 0;
  unidadMedidaIngrediente: string = '';
  ingredientesEnReceta: RecetasConIngrediente[] = [];

  formulario = new FormGroup({
    receta: new FormControl('', Validators.required),
    ingrediente: new FormControl('', Validators.required),
    cantidad: new FormControl('', Validators.required)
  });

  constructor(private _recetasService: RecetasService,
    private _sharedService: SharedService) { }

  ngOnInit(): void {
    this._recetasService.todasRecetas().subscribe(recetas => {
      this.recetas = recetas;
    });
    this._sharedService.obtenerTodos().subscribe(ingredientes => {
      this.ingredientes = ingredientes;
    });
  }
  seleccionarIngrediente(ingrediente: Ingrediente): void {
    this.ingredienteSeleccionado = ingrediente;
    console.log(this.ingredienteSeleccionado);
  }
  agregarIngredienteAReceta() {

    if (this.ingredienteSeleccionado) {
      const ingredienteEnReceta: RecetasConIngrediente = {
        ingrediente: this.ingredienteSeleccionado,
        cantidad: this.cantidadIngrediente,
        unidadMedida: this.unidadMedidaIngrediente
      };
      console.log("ingrediente: ", this.ingredienteSeleccionado);
      console.log("cantidad: ", this.cantidadIngrediente);
      console.log("unidad de medida: ", this.unidadMedidaIngrediente);
      console.log("ingrediente en receta: ", ingredienteEnReceta)
      this.ingredientesEnReceta.push(ingredienteEnReceta);
      console.log("ingredientes en receta: ", this.ingredientesEnReceta);
      console.log("receta: ", this.recetaSeleccionada);
      this.ingredienteSeleccionado = undefined;
      this.cantidadIngrediente = 0;
      this.unidadMedidaIngrediente = '';
    }
  }

  onSubmit() {
   console.log(this.formulario.value);


}
}
