import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiseAdvantageComponent } from './advertise-advantage.component';

describe('AdvertiseAdvantageComponent', () => {
  let component: AdvertiseAdvantageComponent;
  let fixture: ComponentFixture<AdvertiseAdvantageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertiseAdvantageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiseAdvantageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
