import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCalendarComponent } from './tarjeta-calendar.component';

describe('TarjetaCalendarComponent', () => {
  let component: TarjetaCalendarComponent;
  let fixture: ComponentFixture<TarjetaCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
