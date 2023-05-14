export interface NotificacionDTO {
  id:        number;
  idUsuario: number;
  mensaje:   null | string;
  fechaHora: Date;
  leida:     boolean;
}
