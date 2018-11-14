import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemanderProjectItemComponent } from './demander-project-item.component';

describe('DemanderProjectItemComponent', () => {
  let component: DemanderProjectItemComponent;
  let fixture: ComponentFixture<DemanderProjectItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemanderProjectItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemanderProjectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
