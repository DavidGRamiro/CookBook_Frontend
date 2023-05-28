

export interface Categoria{
  idCategoria?: number,
  nombre: string,
  descripcion: string
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
  tiempoCoccion:          number | null ;
  tiempoPreparacion:      number;
  recetasConIngredientes: RecetasConIngrediente[];
  usuario:                Usuario;
}

export interface RecetasConIngrediente {
  idRecetaIncrediente?: number;
  cantidad?:            number;
  unidadMedida?:        string;
  ingrediente:          Ingrediente;
  receta:               Receta;
}

export interface Ingrediente {
  idIngrediente: number;
  descripcion:   string;
  nombre:        string;
}

export interface Usuario {
  idUsuario?:     number | undefined;
  email:         string;
  fechaRegistro: Date;
  imagen?:        string;
  password:      string;
  username:      string;
  plan:          Plan;
}
export interface Plan {
  id:          number;
  nombre:      string;
  descripcion: string;
}

export interface Comentario {
  idComentario:     number;
  fechaPublicacion: Date;
  textoComentario:  string;
  receta:           Receta;
  usuario:          Usuario;
}

