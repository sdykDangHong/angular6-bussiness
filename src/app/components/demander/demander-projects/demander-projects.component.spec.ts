import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemanderProjectsComponent } from './demander-projects.component';

describe('DemanderProjectsComponent', () => {
  let component: DemanderProjectsComponent;
  let fixture: ComponentFixture<DemanderProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemanderProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemanderProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
