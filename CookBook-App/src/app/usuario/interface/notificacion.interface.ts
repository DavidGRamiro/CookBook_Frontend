import { Usuario } from "./usuario.interface";

export interface Notificacion{
  id?:        number;
  usuario?: Usuario;
  mensaje:   string;
  fechaHora?: Date;
  leida:     boolean;
}
