import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShapesComponent } from './add-shapes.component';

describe('AddShapesComponent', () => {
  let component: AddShapesComponent;
  let fixture: ComponentFixture<AddShapesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShapesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
