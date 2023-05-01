import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

import { CategoriasService } from 'src/app/categorias/services/categorias.service';

import { Ingrediente } from '../../interfaces/share.interface';
import { Categoria, Receta, RecetasConIngrediente, Usuario } from 'src/app/recetas/interface/recetas.interface';
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

  ingredientes!: Ingrediente[];
  altaReceta! : Receta;
  ingredienteSeleccionado: Ingrediente[] = [];
  recetaCreada!: Receta;

  recetaForm!: FormGroup;
  categorias: Categoria[] = [
    { idCategoria: 1, nombre: 'Postres', descripcion: 'Recetas dulces' },
    { idCategoria: 2, nombre: 'Platos principales', descripcion: 'Recetas saladas' },
    { idCategoria: 3, nombre: 'Bebidas', descripcion: 'Recetas de bebidas' }
  ];

  user : Usuario = {
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
              private _recetaService: RecetasService,
              private _fb : FormBuilder){}

  ngOnInit(): void {

    this.obtenerIngredientes()
    this.recetaForm = this._fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      tiempoPreparacion: [, Validators.required],
      tiempoCoccion: [],
      calorias: [],
      proteinas: [],
      grasas: [],
      carbohidratos: [],
      imagen: [''],
      usuario: [''],
      categoria: ['', Validators.required],
      instrucciones: ['', Validators.required],
      recetasConIngredientes: this._fb.array([
        this.createIngredienteFormGroup()
      ])
    });
  }

  createIngredienteFormGroup(): FormGroup {
    return this._fb.group({
      cantidad: [ , Validators.required],

      ingrediente: this._fb.group({
        idIngrediente: [''],
        nombre: [''],
        descripcion: [''],
      })
    });
  }

  get recetasIngredientes(){
    return this.recetaForm.get('recetasConIngredientes') as FormArray;
  }



  //FIXME: Llamar a una funcion de busqueda por usuario.
  obtenerUsuario(){
    this._authService.obtenerUno(this.user).subscribe( response => {
      console.log(response);
    })
  }

  //Obtener todos los ingredientes para el desplegable
  obtenerIngredientes(){
    this._sharedService.obtenerTodos().subscribe( data => {
      this.ingredientes = data;
    })
  }

  //Obtener todas las categorias disponibles
  obtenerCategorias(){
  this._categoriaService.getTodasCategorias().subscribe( data => {
      this.categorias = data;
    })
  }

  onSubmit(): void {
    // Crear objeto de tipo Receta a partir de los valores del formulario
    const nuevaReceta: Receta = {
      idReceta: 0,
      nombre: this.recetaForm.value.nombre,
      descripcion: this.recetaForm.value.descripcion,
      tiempoPreparacion: parseInt(this.recetaForm.value.tiempoPreparacion),
      tiempoCoccion: parseInt(this.recetaForm.value.tiempoCoccion),
      calorias: parseInt(this.recetaForm.value.calorias),
      proteinas: parseInt(this.recetaForm.value.proteinas),
      grasas: parseInt(this.recetaForm.value.grasas),
      carbohidratos: parseInt(this.recetaForm.value.carbohidratos),
      imagen: this.recetaForm.value.imagen,
      instrucciones: this.recetaForm.value.instrucciones,
      recetasConIngredientes: this.recetaForm.value.recetasConIngredientes.map((recetaConIngrediente: any) => {
        return {
          cantidad: recetaConIngrediente.cantidad,
          ingrediente: {
            idIngrediente: recetaConIngrediente.ingrediente.idIngrediente
          }
        };
      }),
      usuario: this.user
    };

    console.log(nuevaReceta);

    // this._recetaService.altaReceta(nuevaReceta).subscribe(receta => {
    //   this.recetaCreada = receta;
    //   console.log(this.recetaCreada);
    // });
  }
}









