import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiseAdsComponent } from './advertise-ads.component';

describe('AdvertiseAdsComponent', () => {
  let component: AdvertiseAdsComponent;
  let fixture: ComponentFixture<AdvertiseAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertiseAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiseAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
