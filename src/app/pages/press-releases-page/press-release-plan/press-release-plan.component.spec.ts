import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressReleasePlanComponent } from './press-release-plan.component';

describe('PressReleasePlanComponent', () => {
  let component: PressReleasePlanComponent;
  let fixture: ComponentFixture<PressReleasePlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressReleasePlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressReleasePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
