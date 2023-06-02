import { Component, Input, OnInit } from '@angular/core';
import { UsuarioConPlan } from '../../interface/usuarioconplan.interface';
import { Usuario } from '../../interface/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';
import { DragCalendarComponent } from 'src/app/shared/components/drag-calendar/drag-calendar.component';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-mi-plan',
  templateUrl: './mi-plan.component.html',
  styleUrls: ['./mi-plan.component.css']
})
export class MiPlanComponent implements OnInit {
  @Input() usuario!: Usuario;
  @Input() usuarioConPlan!: UsuarioConPlan;
  progreso: number = 0;
  dateFormat: string = 'dd/MM/yyyy';
  fechaFin: Date = new Date();
  fechaInicio: Date = new Date();
  rangeDates: Date[] = [new Date(), new Date()];

  constructor(private _dialogService: DialogService) { }

  ngOnInit(): void {

    console.log('Starting');
    console.log('Usuario: ' + this.usuario.email);
    console.log('Usuario con plan: ' + this.usuarioConPlan);
    this.progreso = this.calcularProgreso();
  }

  /**
   * Método para calcular el progreso del plan del usuario.
   * @returns el porcentaje (0-100) de progreso del plan del usuario.
   * @example Si el usuario tiene un plan de 30 días y lleva 15 días, el progreso será del 50%.
   */
  calcularProgreso(): number {
    let fechaInicio = new Date(this.usuarioConPlan.fechaInicio);
    let fechaActual = new Date();
    let diasTranscurridos = Math.floor((fechaActual.getTime() - fechaInicio.getTime()) / (1000 * 60 * 60 * 24));
    let diasPlan = this.usuarioConPlan.plan.duracion;
    let progreso = (diasTranscurridos * 100) / diasPlan;
    progreso = Math.round(progreso);
    //Calcular rango de fechas
    let fechaFin = new Date(fechaInicio);
    fechaFin.setDate(fechaFin.getDate() + diasPlan);
    this.rangeDates = [fechaInicio, fechaFin];
    this.fechaFin = fechaFin;
    this.fechaInicio = fechaInicio;
    console.log(progreso);

    return progreso;
  }
  mostrarCalendario(){
    this._dialogService.open( DragCalendarComponent ,{
                                                    header: 'Planning semanal' ,
                                                    width: '90%',
                                                    height: '80%',
                                                    maximizable: true
                                                  })

}


}
