export interface Usuario {
    idUsuario:     number;
    email:         string;
    fechaRegistro: Date;
    imagen:        string;
    password:      string;
    username:      string;
    plan:          Plan;
}
export interface Plan {
  id:          number;
  nombre:      string;
  descripcion: string;
}

