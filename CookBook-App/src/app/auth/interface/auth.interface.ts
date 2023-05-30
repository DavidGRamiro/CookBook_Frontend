export interface Usuario {
  idUsuario?:     number ;
  email:          string | null | undefined;
  fechaRegistro?: Date;
  password:       string | null | undefined;
  username?:      string | null | undefined;
  plan?: Plan,
  usuarioConRoles? : usuarioConRoles [],
  imagen?: string | null | undefined

}
export interface usuarioConRoles{
role : Role,
}
export interface Role {
  idRol: number,
  nombreRol: string

}
export interface Plan {
  id:          number;
  nombre:      string;
  descripcion: string;
}

