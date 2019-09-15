import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressReleasePlanSelectionComponent } from './press-release-plan-selection.component';

describe('PressReleasePlanSelectionComponent', () => {
  let component: PressReleasePlanSelectionComponent;
  let fixture: ComponentFixture<PressReleasePlanSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressReleasePlanSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressReleasePlanSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
