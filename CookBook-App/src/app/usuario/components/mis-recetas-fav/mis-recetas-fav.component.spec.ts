import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisRecetasFavComponent } from './mis-recetas-fav.component';

describe('MisRecetasFavComponent', () => {
  let component: MisRecetasFavComponent;
  let fixture: ComponentFixture<MisRecetasFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisRecetasFavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisRecetasFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
