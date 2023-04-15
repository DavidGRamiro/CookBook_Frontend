import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanarPesoComponent } from './ganar-peso.component';

describe('GanarPesoComponent', () => {
  let component: GanarPesoComponent;
  let fixture: ComponentFixture<GanarPesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanarPesoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GanarPesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
