import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiseFormatsItemComponent } from './advertise-formats-item.component';

describe('AdvertiseFormatsItemComponent', () => {
  let component: AdvertiseFormatsItemComponent;
  let fixture: ComponentFixture<AdvertiseFormatsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertiseFormatsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiseFormatsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
