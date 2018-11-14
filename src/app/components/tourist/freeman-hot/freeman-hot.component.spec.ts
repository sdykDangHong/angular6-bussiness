import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreemanHotComponent } from './freeman-hot.component';

describe('FreemanHotComponent', () => {
  let component: FreemanHotComponent;
  let fixture: ComponentFixture<FreemanHotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreemanHotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreemanHotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
