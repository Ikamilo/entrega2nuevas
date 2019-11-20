import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSaucesComponent } from './add-sauces.component';

describe('AddSaucesComponent', () => {
  let component: AddSaucesComponent;
  let fixture: ComponentFixture<AddSaucesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSaucesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSaucesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
