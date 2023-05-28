import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerRecetasComponent } from './ver-recetas.component';

describe('VerRecetasComponent', () => {
  let component: VerRecetasComponent;
  let fixture: ComponentFixture<VerRecetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerRecetasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
