import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerSearchProjectListComponent } from './freelancer-search-project-list.component';

describe('FreelancerSearchProjectListComponent', () => {
  let component: FreelancerSearchProjectListComponent;
  let fixture: ComponentFixture<FreelancerSearchProjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerSearchProjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerSearchProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
