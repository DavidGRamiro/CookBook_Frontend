import { Usuario } from "./usuario.interface";

export interface Notificacion {
  idNotificacion?: number;
  usuario:        Usuario;
  mensaje:        string;
  fechaHora:      Date;
  leida:          boolean;
}
