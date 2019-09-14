import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiseFormatsComponent } from './advertise-formats.component';

describe('AdvertiseFormatsComponent', () => {
  let component: AdvertiseFormatsComponent;
  let fixture: ComponentFixture<AdvertiseFormatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertiseFormatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiseFormatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
