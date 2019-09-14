import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisePromoComponent } from './advertise-promo.component';

describe('AdvertisePromoComponent', () => {
  let component: AdvertisePromoComponent;
  let fixture: ComponentFixture<AdvertisePromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisePromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisePromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
