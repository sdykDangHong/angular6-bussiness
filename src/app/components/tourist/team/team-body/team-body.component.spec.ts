import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBodyComponent } from './team-body.component';

describe('TeamBodyComponent', () => {
  let component: TeamBodyComponent;
  let fixture: ComponentFixture<TeamBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
