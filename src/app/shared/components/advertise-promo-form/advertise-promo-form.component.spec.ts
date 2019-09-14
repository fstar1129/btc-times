import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisePromoFormComponent } from './advertise-promo-form.component';

describe('AdvertisePromoFormComponent', () => {
  let component: AdvertisePromoFormComponent;
  let fixture: ComponentFixture<AdvertisePromoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisePromoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisePromoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
