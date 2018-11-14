import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandsAddBodyComponent } from './demands-add-body.component';

describe('DemandsAddBodyComponent', () => {
  let component: DemandsAddBodyComponent;
  let fixture: ComponentFixture<DemandsAddBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandsAddBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandsAddBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
