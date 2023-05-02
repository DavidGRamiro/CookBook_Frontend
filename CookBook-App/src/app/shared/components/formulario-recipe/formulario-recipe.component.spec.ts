import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRecipeComponent } from './formulario-recipe.component';

describe('FormularioRecipeComponent', () => {
  let component: FormularioRecipeComponent;
  let fixture: ComponentFixture<FormularioRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
