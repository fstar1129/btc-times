import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOpeningItemComponent } from './current-opening-item.component';

describe('CurrentOpeningItemComponent', () => {
  let component: CurrentOpeningItemComponent;
  let fixture: ComponentFixture<CurrentOpeningItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentOpeningItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentOpeningItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
