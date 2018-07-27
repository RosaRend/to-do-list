import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailToDoComponent } from './detail-to-do.component';

describe('DetailToDoComponent', () => {
  let component: DetailToDoComponent;
  let fixture: ComponentFixture<DetailToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailToDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
