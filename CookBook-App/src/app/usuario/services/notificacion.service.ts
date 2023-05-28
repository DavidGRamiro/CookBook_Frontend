import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {
  private notificacionLeidaSource = new Subject<void>();

  notificacionLeida$ = this.notificacionLeidaSource.asObservable();

  notificacionLeida() {
    this.notificacionLeidaSource.next();
  }
}
