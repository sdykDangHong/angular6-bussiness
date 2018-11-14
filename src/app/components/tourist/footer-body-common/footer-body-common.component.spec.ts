import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBodyCommonComponent } from './footer-body-common.component';

describe('FooterBodyCommonComponent', () => {
  let component: FooterBodyCommonComponent;
  let fixture: ComponentFixture<FooterBodyCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterBodyCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBodyCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
