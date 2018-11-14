import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemanderEchartsComponent } from './demander-echarts.component';

describe('DemanderEchartsComponent', () => {
  let component: DemanderEchartsComponent;
  let fixture: ComponentFixture<DemanderEchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemanderEchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemanderEchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
