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
  tiempoPreparacion: number | undefined;
  tiempoCoccion: number | null;
  instrucciones: string;
  usuario: Usuario;
}
