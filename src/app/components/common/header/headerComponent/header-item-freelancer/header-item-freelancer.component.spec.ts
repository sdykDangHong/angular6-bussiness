import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderItemFreelancerComponent } from './header-item-freelancer.component';

describe('HeaderItemFreelancerComponent', () => {
  let component: HeaderItemFreelancerComponent;
  let fixture: ComponentFixture<HeaderItemFreelancerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderItemFreelancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderItemFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
