import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersCurrentOpeningComponent } from './careers-current-opening.component';

describe('CareersCurrentOpeningComponent', () => {
  let component: CareersCurrentOpeningComponent;
  let fixture: ComponentFixture<CareersCurrentOpeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareersCurrentOpeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareersCurrentOpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
