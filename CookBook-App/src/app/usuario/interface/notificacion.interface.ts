import { Usuario } from "./usuario.interface";

export interface Notificacion{
  id:        number;
  idUsuario: Usuario;
  mensaje:   string;
  fechaHora: Date;
  leida:     boolean;
}
