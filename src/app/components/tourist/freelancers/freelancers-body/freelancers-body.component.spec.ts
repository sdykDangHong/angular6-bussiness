import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancersBodyComponent } from './freelancers-body.component';

describe('FreelancersBodyComponent', () => {
  let component: FreelancersBodyComponent;
  let fixture: ComponentFixture<FreelancersBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancersBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancersBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
