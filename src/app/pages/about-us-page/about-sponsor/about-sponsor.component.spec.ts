import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSponsorComponent } from './about-sponsor.component';

describe('AboutSponsorComponent', () => {
  let component: AboutSponsorComponent;
  let fixture: ComponentFixture<AboutSponsorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSponsorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
