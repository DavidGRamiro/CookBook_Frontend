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
}
