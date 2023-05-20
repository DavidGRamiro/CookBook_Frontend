import { Plan } from "./usuario.interface";
import { Usuario } from "./usuario.interface";

export interface UsuarioConPlan {
  id:          number;
  usuario:   Usuario;
  plan:      Plan;
  progreso:    number;
  fechaInicio: Date;
  estado:      string;
}
