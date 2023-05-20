import { Plan } from "./plan.interface";
import { Usuario } from "./usuario.interface";

export interface UsuarioConPlan {
    id:          number;
    usuario:     Usuario;
    plan:        Plan;
    fechaInicio: Date;
    estado:      string;
}
