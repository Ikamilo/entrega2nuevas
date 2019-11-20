import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlavorsComponent } from './add-flavors.component';

describe('AddFlavorsComponent', () => {
  let component: AddFlavorsComponent;
  let fixture: ComponentFixture<AddFlavorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFlavorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFlavorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
