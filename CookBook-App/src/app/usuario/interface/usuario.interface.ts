import { usuarioConRoles } from 'src/app/auth/interface/auth.interface';
import { Plan } from './plan.interface';

export interface Usuario {
  idUsuario:     number ;
  email:          string;
  fechaRegistro?: Date;
  password:       string;
  username:      string;
  plan?: Plan,
  usuarioConRoles? : usuarioConRoles [],
  imagen: string;
}
