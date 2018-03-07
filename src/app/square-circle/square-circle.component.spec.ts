import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareCircleComponent } from './square-circle.component';

describe('SquareCircleComponent', () => {
  let component: SquareCircleComponent;
  let fixture: ComponentFixture<SquareCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
