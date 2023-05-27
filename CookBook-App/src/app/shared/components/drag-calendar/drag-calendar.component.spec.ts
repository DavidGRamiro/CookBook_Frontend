import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragCalendarComponent } from './drag-calendar.component';

describe('DragCalendarComponent', () => {
  let component: DragCalendarComponent;
  let fixture: ComponentFixture<DragCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
