import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskRouteComponent } from './task-route.component';

describe('TaskRouteComponent', () => {
  let component: TaskRouteComponent;
  let fixture: ComponentFixture<TaskRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
