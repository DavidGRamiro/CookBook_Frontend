import { Component, Input } from '@angular/core';
import { Plan } from '../../interfaces/share.interface';

@Component({
  selector: 'app-tarjeta-plan',
  templateUrl: './tarjeta-plan.component.html',
  styleUrls: ['./tarjeta-plan.component.css'],
})
export class TarjetaPlanComponent {
  @Input() plan!: Plan;

  constructor() {}
}
