import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedMiniViewItemComponent } from './featured-mini-view-item.component';

describe('FeaturedMiniViewItemComponent', () => {
  let component: FeaturedMiniViewItemComponent;
  let fixture: ComponentFixture<FeaturedMiniViewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedMiniViewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedMiniViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
