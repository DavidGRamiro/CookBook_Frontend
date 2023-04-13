import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenasComponent } from './cenas.component';

describe('CenasComponent', () => {
  let component: CenasComponent;
  let fixture: ComponentFixture<CenasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
