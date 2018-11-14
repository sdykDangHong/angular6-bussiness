import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderItemNoLoginComponent } from './header-item-no-login.component';

describe('HeaderItemNoLoginComponent', () => {
  let component: HeaderItemNoLoginComponent;
  let fixture: ComponentFixture<HeaderItemNoLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderItemNoLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderItemNoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
