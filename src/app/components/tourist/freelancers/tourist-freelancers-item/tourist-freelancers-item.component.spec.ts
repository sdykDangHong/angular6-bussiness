import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristFreelancersItemComponent } from './tourist-freelancers-item.component';

describe('TouristFreelancersItemComponent', () => {
  let component: TouristFreelancersItemComponent;
  let fixture: ComponentFixture<TouristFreelancersItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouristFreelancersItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristFreelancersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
