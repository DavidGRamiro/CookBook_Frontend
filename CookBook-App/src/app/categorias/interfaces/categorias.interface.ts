import { RecetasConIngrediente, Usuario } from "src/app/recetas/interface/recetas.interface";

export interface Categoria {
  idCategoria: number;
  descripcion: string;
  nombre:      string;
  imagen:      string;
}
export interface Receta {
  idReceta:               number;
  calorias:               number;
  carbohidratos:          number;
  descripcion:            string;
  grasas:                 number;
  imagen?:                string;
  instrucciones:          string;
  nombre:                 string;
  proteinas:              number;
  tiempoCoccion:          number | null;
  tiempoPreparacion:      number;
  recetasConIngredientes: RecetasConIngrediente[];
  usuario:                Usuario;
}
