import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideSubmissionComponent } from './side-submission.component';

describe('SideSubmissionComponent', () => {
  let component: SideSubmissionComponent;
  let fixture: ComponentFixture<SideSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
