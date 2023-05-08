import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria, Ingrediente, RecetasConIngrediente, Receta} from 'src/app/shared/interfaces/share.interface';
import { SharedService } from '../../services/shared.service';
import { Usuario } from 'src/app/recetas/interface/recetas.interface';

@Component({
  selector: 'app-fomulario-recipe',
  templateUrl: './formulario-recipe.component.html',
  styleUrls: ['./formulario-recipe.component.css']
})
export class FormularioRecipeComponent implements OnInit{

  receta!: Receta;
  recetaEnviada!: Receta;
  categoria!: Categoria;
  ingredientes!: Ingrediente[];
  ingredienteSeleccionado: Ingrediente | undefined;
  ingredientesEnReceta: RecetasConIngrediente[] = [];
  mostrarNuevoIngrediente = false;
  usuario : Usuario   = {
    idUsuario: 100,
    email: 'administrador@admin.com',
    password: '000',
    username: '',
    fechaRegistro: new Date(),
    plan: {
      id: 0,
      descripcion: '',
      nombre: ''
    }
  }

  recetaFormulario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    tiempoPreparacion: new FormControl(null, [Validators.required, Validators.pattern(/^\d+$/)]),
    tiempoCoccion: new FormControl(null, [Validators.required, Validators.pattern(/^\d+$/)]),
    instrucciones: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required)
  });

  categorias!: Categoria[];

  formulario = new FormGroup({
    ingrediente: new FormControl('', Validators.required),
    cantidad: new FormControl(null, [Validators.required, Validators.pattern(/^\d+$/)]),
    unidadMedida: new FormControl(null, Validators.required)
  });

  constructor(private _sharedService: SharedService) { }

  ngOnInit(): void {
    this._sharedService.obtenerTodos().subscribe(ingredientes => {
      this.ingredientes = ingredientes;
    });
    this._sharedService.obtenerCategorias().subscribe(categorias => {
      this.categorias = categorias;
    });
  }
  mostrarFormularioIngredientes() {
    this.mostrarNuevoIngrediente = true;
  }
  seleccionarIngrediente(ingrediente: Ingrediente): void {
    this.ingredienteSeleccionado = ingrediente;
    console.log(this.ingredienteSeleccionado);
    console.log(this.formulario.value);
  }
  seleccionarCategoria(categoria: Categoria): void {
    this.categoria= categoria;
    console.log(this.recetaFormulario.value.categoria);
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
          receta: this.receta
      };
      this.ingredientesEnReceta.push(ingredienteAgregado);
      console.log(this.ingredientesEnReceta);
      console.log(ingredienteAgregado);
    }
  }
}
  guardarReceta() {
    //Evitamos el comportamiento por defecto del formulario
    event?.preventDefault();
    if (this.recetaFormulario.valid) {
      const nombre = this.recetaFormulario.value.nombre;
      const descripcion = this.recetaFormulario.value.descripcion;
      const tiempoPreparacion = this.recetaFormulario.value.tiempoPreparacion;
      const tiempoCoccion = this.recetaFormulario.value.tiempoCoccion;
      const instrucciones = this.recetaFormulario.value.instrucciones;
      const categoria = this.categoria;
      const usuario = this.usuario;
      if (nombre && descripcion && tiempoPreparacion && tiempoCoccion && instrucciones && categoria && usuario) {
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
          imagen: null,
          usuario: usuario
        };
        console.log(this.receta);
      }
    }
  }
  /*eliminarIngrediente(ingrediente: Ingrediente): void {
    const index = this.ingredientesEnReceta.indexOf(ingrediente);
    this.ingredientesEnReceta.splice(index, 1);
  }*/

  agregarTodos() {
    if (this.formulario.valid) {
        //Si el formulario es valido, por cada objeto en ingredientesEnReceta, se crea un insert en la BBDD
        this.ingredientesEnReceta.forEach(ingredientesEnReceta => {
          ingredientesEnReceta.receta = this.recetaEnviada;
        });
        console.log(this.ingredientesEnReceta);
    }
  }
  onSubmitIngredientes() {
    event?.preventDefault();
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
  onSubmitReceta() {
    event?.preventDefault();
    if (this.recetaFormulario.valid) {
      //Si el formulario es valido, se crea un insert en la BBDD
      this._sharedService.altaReceta(this.receta).subscribe(resp => {
        console.log(resp);
        this.recetaEnviada = resp;
      }
      );
    }
  }
}
