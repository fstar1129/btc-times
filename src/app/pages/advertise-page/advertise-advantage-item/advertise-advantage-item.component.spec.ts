import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiseAdvantageItemComponent } from './advertise-advantage-item.component';

describe('AdvertiseAdvantageItemComponent', () => {
  let component: AdvertiseAdvantageItemComponent;
  let fixture: ComponentFixture<AdvertiseAdvantageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertiseAdvantageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiseAdvantageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
