import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerProjectItemComponent } from './freelancer-project-item.component';

describe('FreelancerProjectItemComponent', () => {
  let component: FreelancerProjectItemComponent;
  let fixture: ComponentFixture<FreelancerProjectItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerProjectItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerProjectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
