import { Plan } from "./usuario.interface";
import { Usuario } from "./usuario.interface";

export interface UsuarioConPlan {
  id:          number;
  idUsuario:   Usuario;
  idPlan:      Plan;
  progreso:    number;
  fechaInicio: Date;
  estado:      string;
}
