import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiseAdsItemComponent } from './advertise-ads-item.component';

describe('AdvertiseAdsItemComponent', () => {
  let component: AdvertiseAdsItemComponent;
  let fixture: ComponentFixture<AdvertiseAdsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertiseAdsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiseAdsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
