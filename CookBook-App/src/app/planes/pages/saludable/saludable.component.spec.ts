import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludableComponent } from './saludable.component';

describe('SaludableComponent', () => {
  let component: SaludableComponent;
  let fixture: ComponentFixture<SaludableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaludableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaludableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
