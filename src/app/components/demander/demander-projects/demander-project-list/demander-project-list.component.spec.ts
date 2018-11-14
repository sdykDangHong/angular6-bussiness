import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemanderProjectListComponent } from './demander-project-list.component';

describe('DemanderProjectListComponent', () => {
  let component: DemanderProjectListComponent;
  let fixture: ComponentFixture<DemanderProjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemanderProjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemanderProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
