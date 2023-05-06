import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingrediente, RecetasConIngrediente } from 'src/app/shared/interfaces/share.interface';
import { RecetasService } from 'src/app/recetas/services/recetas.service';
import { SharedService } from '../../services/shared.service';
import { Receta } from 'src/app/recetas/interface/recetas.interface';

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
  ingredientesEnReceta: RecetasConIngrediente[] = [];

  formulario = new FormGroup({
    receta: new FormControl('', Validators.required),
    ingrediente: new FormControl('', Validators.required),
    cantidad: new FormControl(null, [Validators.required, Validators.pattern(/^\d+$/)]),
    unidadMedida: new FormControl(null, Validators.required)
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
    console.log(this.formulario.value);
  }
  seleccionarReceta(receta: Receta): void {
    this.recetaSeleccionada = receta;
    console.log(this.recetaSeleccionada);
    console.log(this.formulario.value);
  }
  agregarIngredienteAReceta() {
    if (this.ingredienteSeleccionado  && this.formulario.valid ) {
      const cantidad = Number(this.formulario.value.cantidad);
      const unidadMedida = this.formulario.value.unidadMedida;
      if (!isNaN(cantidad) && unidadMedida) {
        const ingredienteAgregado: RecetasConIngrediente = {
          ingrediente: this.ingredienteSeleccionado,
          cantidad: cantidad,
          unidadMedida: unidadMedida,
          receta: this.recetaSeleccionada
      };
      this.ingredientesEnReceta.push(ingredienteAgregado);
      console.log(this.ingredientesEnReceta);
      console.log(ingredienteAgregado);
    }
  }
  }

  onSubmit() {
    if (this.formulario.valid) {
        //Si el formulario es valido, por cada objeto en ingredientesEnReceta, se crea un insert en la BBDD
        this.ingredientesEnReceta.forEach(ingredientesEnReceta => {
          this._sharedService.altaRecetaConIngrediente(ingredientesEnReceta).subscribe(resp => {
            console.log(resp);
          });
        });
      this.formulario.reset();
    }
  }
}
