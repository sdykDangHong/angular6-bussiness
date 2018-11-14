import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristProjectItemComponent } from './tourist-project-item.component';

describe('TouristProjectItemComponent', () => {
  let component: TouristProjectItemComponent;
  let fixture: ComponentFixture<TouristProjectItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouristProjectItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristProjectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
