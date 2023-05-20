import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselRecetasComponent } from './carousel-recetas.component';

describe('CarouselRecetasComponent', () => {
  let component: CarouselRecetasComponent;
  let fixture: ComponentFixture<CarouselRecetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselRecetasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
