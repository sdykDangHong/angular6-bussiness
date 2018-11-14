import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentBodyComponent } from './recruitment-body.component';

describe('RecruitmentBodyComponent', () => {
  let component: RecruitmentBodyComponent;
  let fixture: ComponentFixture<RecruitmentBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitmentBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitmentBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
