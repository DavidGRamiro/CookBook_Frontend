import { Plan } from './plan.interface';

export interface Usuario {
  idUsuario: number;
  email: string;
  fechaRegistro: Date;
  imagen: string;
  password: string;
  username: string;
  plan: Plan;
}
