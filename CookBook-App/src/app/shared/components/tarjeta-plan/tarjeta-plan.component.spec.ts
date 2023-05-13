import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPlanComponent } from './tarjeta-plan.component';

describe('TarjetaPlanComponent', () => {
  let component: TarjetaPlanComponent;
  let fixture: ComponentFixture<TarjetaPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
