import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Ingrediente, Receta, RecetasConIngrediente } from 'src/app/recetas/interface/recetas.interface';
import { RecetasService } from 'src/app/recetas/services/recetas.service';

@Component({
  selector: 'app-edit-receta',
  templateUrl: './edit-receta.component.html',
  styleUrls: ['./edit-receta.component.css']
})
export class EditRecetaComponent implements OnInit {

  receta! : Receta;
  ingredientes!: Ingrediente;
  formEditarReceta!: FormGroup;

  constructor( private _ref: DynamicDialogRef,
              private _config: DynamicDialogConfig,
              private _fb : FormBuilder,
              private _recetaService: RecetasService,
              private _msg: MessageService)
              { this.receta = this._config.data.receta }

  ngOnInit(): void {
    this.formEditarReceta = this._fb.group({
      idReceta: [this.receta.idReceta],
      nombre: [this.receta.nombre],
      descripcion: [this.receta.descripcion],
      instrucciones : [this.receta.descripcion],
      tiempoPreparacion: [this.receta.tiempoPreparacion],
      tiempoCoccion: [this.receta.tiempoCoccion],
      calorias: [this.receta.calorias],
      proteinas: [this.receta.proteinas],
      grasas: [this.receta.grasas],
      carbohidratos: [this.receta.carbohidratos],
      usuario: [this.receta.usuario],
      recetasConIngredientes: [this.receta.recetasConIngredientes]
    })
  }

  actualizarReceta(){

    this.formEditarReceta.markAllAsTouched();
    if(this.formEditarReceta.valid){

      const recetaActualizada = this.formEditarReceta.value;

      this._recetaService.editarReceta(recetaActualizada).subscribe( response => {
        this._msg.add({severity:'success', summary:'Receta actualizada', detail: 'La receta se ha actualizado correctamente'})
        setTimeout(()=> {
          window.location.reload();
        }, 1500)
      },
      error => {
        this._msg.add({severity:'error', summary:'Error de actualización', detail: 'No se ha podido actualizar la receta'})
      })
    }


  }

}



