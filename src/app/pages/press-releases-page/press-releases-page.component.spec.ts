import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressReleasesPageComponent } from './press-releases-page.component';

describe('PressReleasesPageComponent', () => {
  let component: PressReleasesPageComponent;
  let fixture: ComponentFixture<PressReleasesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressReleasesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressReleasesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
