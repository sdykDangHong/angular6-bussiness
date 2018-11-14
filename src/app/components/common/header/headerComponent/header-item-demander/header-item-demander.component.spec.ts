import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderItemDemanderComponent } from './header-item-demander.component';

describe('HeaderItemDemanderComponent', () => {
  let component: HeaderItemDemanderComponent;
  let fixture: ComponentFixture<HeaderItemDemanderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderItemDemanderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderItemDemanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
