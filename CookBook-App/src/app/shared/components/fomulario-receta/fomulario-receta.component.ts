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
export class FomularioRecetaComponent implements OnInit{

  receta!: Receta;
  ingredientes!: Ingrediente[];
  altaReceta! : Receta;
  ingredienteSeleccionado: Ingrediente | undefined;
  ingredientesEnReceta: RecetasConIngrediente[] = [];

  formulario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    tiempoPreparacion: new FormControl(null, [Validators.required, Validators.pattern(/^\d+$/)]),
    tiempoCoccion: new FormControl(null, [Validators.required, Validators.pattern(/^\d+$/)]),
    instrucciones: new FormControl('', Validators.required),
    ingrediente: new FormControl('', Validators.required),
    cantidad: new FormControl(null, [Validators.required, Validators.pattern(/^\d+$/)]),
    unidadMedida: new FormControl(null, Validators.required)
  });

  categorias: Categoria[] = [
    { idCategoria: 1, nombre: 'Postres', descripcion: 'Recetas dulces' },
    { idCategoria: 2, nombre: 'Platos principales', descripcion: 'Recetas saladas' },
    { idCategoria: 3, nombre: 'Bebidas', descripcion: 'Recetas de bebidas' }
  ];

  user : Usuario   = {
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

  constructor(private _sharedService : SharedService,
              private _categoriaService : CategoriasService,
              private _authService : AuthService,
              private _recetasService: RecetasService,
              private _fb : FormBuilder){}

  ngOnInit(): void {

    this._sharedService.obtenerTodos().subscribe(ingredientes => {
      this.ingredientes = ingredientes;
    });
  }


  seleccionarIngrediente(ingrediente: Ingrediente): void {
    this.ingredienteSeleccionado = ingrediente;
    console.log(this.ingredienteSeleccionado);
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
          receta: this.receta
      };
      this.ingredientesEnReceta.push(ingredienteAgregado);
      console.log(this.ingredientesEnReceta);
      console.log(ingredienteAgregado);
    }
  }
  }

  //FIXME: Llamar a una funcion de busqueda por usuario.
  obtenerUsuario(){
    this._authService.obtenerUno(this.user).subscribe( response => {
      console.log(response);
    })
  }

  //Obtener todas las categorias disponibles
  obtenerCategorias(){
  this._categoriaService.getTodasCategorias().subscribe( data => {
      this.categorias = data;
    })
  }

  onSubmit(): void {

      const nombre = this.formulario.value.nombre;
      const descripcion = this.formulario.value.descripcion;
      const tiempoPreparacion = this.formulario.value.tiempoPreparacion;
      const tiempoCoccion = this.formulario.value.tiempoCoccion;
      const instrucciones = this.formulario.value.instrucciones;
      const user = this.user;

     if(nombre && descripcion && tiempoPreparacion && tiempoCoccion && instrucciones && user){
      this.receta = {
        nombre: nombre,
        descripcion: descripcion,
        tiempoPreparacion: tiempoPreparacion,
        tiempoCoccion: tiempoCoccion,
        instrucciones: instrucciones,
        usuario: user
      }

    console.log(this.receta);

    // this._recetaService.altaReceta(nuevaReceta).subscribe(receta => {
    //   this.recetaCreada = receta;
    //   console.log(this.recetaCreada);
    // });
  }
}
}
