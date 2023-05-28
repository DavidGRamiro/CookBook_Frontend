import { Usuario } from "src/app/recetas/interface/recetas.interface";

export interface Ingrediente {
  idIngrediente?: number;
  descripcion:    string;
  nombre:         string;
}
export interface RecetasConIngrediente {
idRecetaIncrediente?: number;
cantidad:            number;
unidadMedida:        string;
ingrediente:         Ingrediente;
receta:              Receta;
}
export interface Receta {
  idReceta?: number;
  nombre:    string;
  descripcion: string;
  tiempoPreparacion: number | 0;
  tiempoCoccion: number | 0;
  instrucciones: string;
  calorias: number | 0;
  carbohidratos: number | 0;
  proteinas: number | 0;
  grasas: number | 0;
  imagen: string | null;
  categoria: Categoria;
  usuario: Usuario;
}
export interface Categoria {
  idCategoria: number;
  descripcion: string;
  nombre:      string;
  imagen:      string;
}

export interface Plan {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  duracion: number;
}
