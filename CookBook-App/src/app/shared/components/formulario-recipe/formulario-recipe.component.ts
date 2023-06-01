import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  Categoria,
  Ingrediente,
  RecetasConIngrediente,
  Receta,
} from 'src/app/shared/interfaces/share.interface';
import { SharedService } from '../../services/shared.service';
import { Usuario } from 'src/app/recetas/interface/recetas.interface';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-fomulario-recipe',
  templateUrl: './formulario-recipe.component.html',
  styleUrls: ['./formulario-recipe.component.css'],
})
export class FormularioRecipeComponent implements OnInit {
  receta!: Receta;
  recetaEnviada!: Receta;
  categoria!: Categoria;
  ingredientes!: Ingrediente[];
  ingredienteSeleccionado!: Ingrediente | null;
  ingredientesEnReceta: RecetasConIngrediente[] = [];
  mostrarNuevoIngrediente = false;
  ingredientesFiltrados!: Ingrediente[];
  usuario: Usuario;
  unidadesMedida: string[] = ['kg', 'g', 'l', 'ml', 'mg', 'cl', 'dl'];
  maxFileSize: number = 3000000;
  uploadedFile: any;
  uploadedImageUrl!: string; // nueva variable para guardar la URL de la imagen subida
  ingredientesAnadidos = false;
  recetaGuardada: boolean = false;

  recetaForm = this._fb.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required],
    tiempoPreparacion: [
      null,
      [Validators.required, Validators.pattern(/^\d+$/)],
    ],
    tiempoCoccion: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
    instrucciones: ['', Validators.required],
    categoria: [0, Validators.required],
  });

  categorias!: Categoria[];

  ingredienteForm = this._fb.group({
    ingrediente: ['', Validators.required],
    cantidad: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
    unidadMedida: ['', Validators.required],
  });

  constructor(
    private _sharedService: SharedService,
    public _config: DynamicDialogConfig,
    private _msg: MessageService,
    private _fb: FormBuilder,
    private _dialogRef: DynamicDialogRef
  ) {
    this.usuario = this._config.data.usuario;
  }

  ngOnInit(): void {
    this.obtenerIngredientes();
    this.obtenerCategorias();
  }

  private obtenerIngredientes() {
    this._sharedService.obtenerTodos().subscribe((ingredientes) => {
      this.ingredientes = ingredientes;
    });
  }

  private obtenerCategorias() {
    this._sharedService.obtenerCategorias().subscribe((categorias) => {
      this.categorias = categorias;
    });
  }

  filtrarIngredientes(e: any) {
    const query = e.query;
    this.ingredientesFiltrados = this.ingredientes.filter((ingrediente) => {
      return ingrediente.nombre.toLowerCase().includes(query.toLowerCase());
    });
  }

  mostrarFormularioIngredientes() {
    this.mostrarNuevoIngrediente = true;
  }

  seleccionarIngrediente(ingrediente: Ingrediente): void {
    this.ingredienteSeleccionado = ingrediente;
  }

  seleccionarCategoria(categoria: Categoria): void {
    this.categoria = categoria;
  }

  seleccionarUnidadMedida(unidadMedida: string): void {
    this.ingredienteForm.controls.unidadMedida.setValue(unidadMedida);
  }

  dividirCadena(instrucciones: String): String[]{
    let subCadena = instrucciones.split(/(?<=\.)/g);
    return subCadena.filter(instruccion => instruccion.trim() !== '');
  }

  agregarIngredienteAReceta() {
    if (this.ingredienteSeleccionado && this.ingredienteForm.valid) {
      const cantidad = Number(this.ingredienteForm.value.cantidad);
      const unidadMedida = this.ingredienteForm.value.unidadMedida;
      console.log(this.recetaForm.value);
      if (!isNaN(cantidad) && unidadMedida) {
        const ingredienteAgregado: RecetasConIngrediente = {
          ingrediente: this.ingredienteSeleccionado,
          cantidad: cantidad,
          unidadMedida: unidadMedida,
          receta: this.recetaEnviada,
        };
        console.log(ingredienteAgregado);
        this.ingredientesEnReceta.push(ingredienteAgregado);
        this.ingredienteSeleccionado = null;
        this.ingredienteForm.reset();
      }
    }
  }

  guardarReceta(e: Event) {
    //Evitamos el comportamiento por defecto del formulario
    e.preventDefault();
    if (this.recetaForm.valid) {
      const nombre = this.recetaForm.value.nombre;
      const descripcion = this.recetaForm.value.descripcion;
      const tiempoPreparacion = this.recetaForm.value.tiempoPreparacion;
      const tiempoCoccion = this.recetaForm.value.tiempoCoccion;
      const instrucciones = this.recetaForm.value.instrucciones;
      const categoria = this.categoria;
      const usuario = this.usuario;
      if (
        nombre &&
        descripcion &&
        tiempoPreparacion &&
        tiempoCoccion &&
        instrucciones &&
        categoria &&
        usuario
      ) {
        this.receta = {
          nombre: nombre,
          descripcion: descripcion,
          tiempoPreparacion: tiempoPreparacion,
          tiempoCoccion: tiempoCoccion,
          instrucciones: instrucciones,
          categoria: categoria,
          calorias: 0,
          carbohidratos: 0,
          proteinas: 0,
          grasas: 0,
          imagen: '',
          usuario: usuario,
        };
        console.log(this.receta);
        this.mostrarFormularioIngredientes();
      }
    }
  }

  eliminarIngrediente(ingrediente: any) {
    const index = this.ingredientesEnReceta.indexOf(ingrediente);
    if (index !== -1) {
      this.ingredientesEnReceta.splice(index, 1);
      this._msg.add({
        severity: 'success',
        summary: 'Ingrediente eliminado',
        detail: 'Ingrediente eliminado correctamente',
      });
    }
  }

  agregarTodos() {
    if (this.recetaForm.valid) {
      if (this.ingredientesEnReceta.length > 0) {
        //Si el formulario es valido, por cada objeto en ingredientesEnReceta, se crea un insert en la BBDD
        this.ingredientesEnReceta.forEach((ingredientesEnReceta) => {
          ingredientesEnReceta.receta = this.recetaEnviada;
        });
        console.log(this.ingredientesEnReceta);
      }
    }
  }

  onSubmitIngredientes(e: Event) {
    e.preventDefault();
    this.agregarTodos();
    this.ingredientesEnReceta.forEach((ingredientesEnReceta) => {
      this._sharedService
        .altaRecetaConIngrediente(ingredientesEnReceta)
        .subscribe((resp) => {
          console.log(resp);
          this._msg.add({
            severity: 'success',
            summary: 'Cambios guardados',
            detail: 'Los cambios se han guardados correctamente',
          });
          this._dialogRef.close();
        });
    });
    this.ingredienteForm.reset();
  }

  onSubmitReceta(e: Event) {
    e.preventDefault();
    if (!this.recetaForm.valid) {
      this._msg.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Por favor, completa todos los campos',
      });
      e.preventDefault();
      return;
    }
    if (this.recetaForm.valid) {
      //Si el ingredienteForm es valido, se crea un insert en la BBDD
      this._sharedService.altaReceta(this.receta).subscribe(
        (resp) => {
          this.recetaEnviada = resp;
          console.log('Receta dada de alta', this.recetaEnviada);
        },
        (error) => {
          console.log('Error al dar de alta', error);
        }
      );
      this.ingredientesAnadidos = true;
      this.recetaGuardada = true;
      this.recetaForm.disable();
    }
  }

  //Esta funcion crea un nuevp nombre para la foto de la receta
  private createNewFileName(nombre: string, oldFileName: string): string {
    const fileExtension = oldFileName.split('.').pop();
    // Dividir el nombre en palabras y tomar las dos primeras palabras
    let nombreArr = nombre.split(' ');
    if (nombreArr.length > 2) {
      nombre = nombreArr[0] + '-' + nombreArr[1];
    }

    nombre = nombre.replace(/\s/g, '-');
    nombre = nombre.toLowerCase();

    let newFileName = `${nombre}.${fileExtension}`;
    console.log(newFileName);
    return newFileName;
  }

  upload(event: any) {
    console.log('upload');
    console.log(event.files);
    if (event.files.length > 0) {
      this.uploadedFile = event.files[0];
      console.log(event.files[0].name);
      let nuevoNombre = this.createNewFileName(
        this.receta.nombre,
        event.files[0].name
      );
      let newFile = new File([event.files[0]], nuevoNombre, {
        type: event.files[0].type,
      });
      console.log(newFile);
      if (this.recetaEnviada.idReceta != null) {
        this._sharedService
          .subirImagen(newFile, this.recetaEnviada.idReceta)
          .subscribe((receta: Receta) => {
            console.log(receta);
            this.uploadedImageUrl = receta.imagen;
            this._msg.add({
              severity: 'success',
              summary: 'Imagen subida',
              detail: 'La imagen se ha subido correctamente',
            });
          });
      }
    }
  }
}
