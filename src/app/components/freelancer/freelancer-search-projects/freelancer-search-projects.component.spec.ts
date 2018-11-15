import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerSearchProjectsComponent } from './freelancer-search-projects.component';

describe('FreelancerSearchProjectsComponent', () => {
  let component: FreelancerSearchProjectsComponent;
  let fixture: ComponentFixture<FreelancerSearchProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerSearchProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerSearchProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
