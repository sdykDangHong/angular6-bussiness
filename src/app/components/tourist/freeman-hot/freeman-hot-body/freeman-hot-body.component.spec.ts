import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreemanHotBodyComponent } from './freeman-hot-body.component';

describe('FreemanHotBodyComponent', () => {
  let component: FreemanHotBodyComponent;
  let fixture: ComponentFixture<FreemanHotBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreemanHotBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreemanHotBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
