import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerderPesoComponent } from './perder-peso.component';

describe('PerderPesoComponent', () => {
  let component: PerderPesoComponent;
  let fixture: ComponentFixture<PerderPesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerderPesoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerderPesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
