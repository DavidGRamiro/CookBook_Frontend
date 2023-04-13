import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiniosComponent } from './ninios.component';

describe('NiniosComponent', () => {
  let component: NiniosComponent;
  let fixture: ComponentFixture<NiniosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiniosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NiniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
