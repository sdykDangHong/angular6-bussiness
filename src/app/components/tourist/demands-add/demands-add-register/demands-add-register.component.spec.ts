import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandsAddRegisterComponent } from './demands-add-register.component';

describe('DemandsAddRegisterComponent', () => {
  let component: DemandsAddRegisterComponent;
  let fixture: ComponentFixture<DemandsAddRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandsAddRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandsAddRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
