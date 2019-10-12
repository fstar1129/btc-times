import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsMainComponent } from './contact-us-main.component';

describe('ContactUsMainComponent', () => {
  let component: ContactUsMainComponent;
  let fixture: ComponentFixture<ContactUsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
