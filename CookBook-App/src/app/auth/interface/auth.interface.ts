export interface Usuario {
  idUsuario?:     number ;
  email:          string | null | undefined;
  fechaRegistro?: Date;
  password:       string | null | undefined;
  username?:      string | null | undefined;
  plan?: Plan

}

export interface Plan {
  id:          number;
  nombre:      string;
  descripcion: string;
}

