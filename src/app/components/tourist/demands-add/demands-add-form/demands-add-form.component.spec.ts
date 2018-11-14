import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandsAddFormComponent } from './demands-add-form.component';

describe('DemandsAddFormComponent', () => {
  let component: DemandsAddFormComponent;
  let fixture: ComponentFixture<DemandsAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandsAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandsAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
