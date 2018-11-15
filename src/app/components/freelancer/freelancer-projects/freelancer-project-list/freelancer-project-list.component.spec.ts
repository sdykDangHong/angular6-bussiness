import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerProjectListComponent } from './freelancer-project-list.component';

describe('FreelancerProjectListComponent', () => {
  let component: FreelancerProjectListComponent;
  let fixture: ComponentFixture<FreelancerProjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerProjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
