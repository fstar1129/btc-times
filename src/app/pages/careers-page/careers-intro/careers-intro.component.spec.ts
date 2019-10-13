import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersIntroComponent } from './careers-intro.component';

describe('CareersIntroComponent', () => {
  let component: CareersIntroComponent;
  let fixture: ComponentFixture<CareersIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareersIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareersIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
