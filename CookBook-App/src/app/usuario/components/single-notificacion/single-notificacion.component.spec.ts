import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNotificacionComponent } from './single-notificacion.component';

describe('SingleNotificacionComponent', () => {
  let component: SingleNotificacionComponent;
  let fixture: ComponentFixture<SingleNotificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleNotificacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleNotificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
