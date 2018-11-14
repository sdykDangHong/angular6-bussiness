import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandsAddComponent } from './demands-add.component';

describe('DemandsAddComponent', () => {
  let component: DemandsAddComponent;
  let fixture: ComponentFixture<DemandsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
